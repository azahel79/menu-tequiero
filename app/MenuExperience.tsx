"use client";

import Image, { type StaticImageData } from "next/image";
import NumberFlow from "@number-flow/react";
import Lenis from "lenis";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiClock,
  FiCompass,
  FiGrid,
  FiMapPin,
  FiMenu,
  FiMessageCircle,
  FiMusic,
  FiPhone,
  FiSearch,
  FiStar,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { menuSections, serviceHighlights, type MenuItem, type MenuSection } from "./menu-data";

type Props = {
  logo: StaticImageData;
};

const iconMap = {
  botana: FiStar,
  mariscos: FiCompass,
  infantil: FiUsers,
  musica: FiMusic,
  evento: FiMessageCircle,
};

function Price({ value }: { value: number }) {
  return (
    <span className="menu-price" aria-label={`${value} pesos`}>
      <span aria-hidden="true">$</span>
      <NumberFlow value={value} locales="es-MX" willChange aria-hidden="true" />
    </span>
  );
}

function MenuRow({ item, index }: { item: MenuItem; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`menu-row ${item.featured ? "is-featured" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.2) }}
    >
      {item.featured && <span className="house-label">Favorito de la casa</span>}
      <div className="menu-row-heading">
        <h3>{item.name}</h3>
        <span className="leader" aria-hidden="true" />
        <Price value={item.price} />
      </div>
      {item.detail && <p>{item.detail}</p>}
    </motion.article>
  );
}

function MenuPage({ section, index }: { section: MenuSection; index: number }) {
  return (
    <div className="category-page">
      <header className="category-heading">
        <div className="category-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div>
          <span className="eyebrow">{section.eyebrow}</span>
          <h2>{section.title}</h2>
          {section.intro && <p>{section.intro}</p>}
        </div>
      </header>

      <div className={`menu-list ${section.id === "alitas-boneless" ? "size-list" : ""}`}>
        {section.items.map((item, itemIndex) => (
          <MenuRow item={item} index={itemIndex} key={item.name} />
        ))}
      </div>

      {section.flavors && (
        <section className="flavor-block" aria-labelledby="flavor-title">
          <span className="eyebrow">Quince opciones</span>
          <h3 id="flavor-title">Sabores disponibles</h3>
          <div className="flavor-grid">
            {section.flavors.map((flavor, flavorIndex) => (
              <motion.span
                key={flavor}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(flavorIndex * 0.025, 0.25) }}
              >
                {flavor}
              </motion.span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function MenuExperience({ logo }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [query, setQuery] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.05,
    });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduceMotion]);

  useEffect(() => {
    const activeTab = navRef.current?.querySelector<HTMLElement>(
      `[data-index="${activeIndex}"]`,
    );
    activeTab?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex, reduceMotion]);

  useEffect(() => {
    if (!searchOpen && !categoryMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setCategoryMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [searchOpen, categoryMenuOpen]);

  useEffect(() => {
    let hintWasSeen = false;
    try {
      hintWasSeen = window.sessionStorage.getItem("tqb-swipe-hint-seen") === "true";
    } catch {
      hintWasSeen = false;
    }
    if (hintWasSeen) return;

    const menuElement = document.getElementById("menu");
    if (!menuElement) return;

    let hideTimer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShowSwipeHint(true);
        hideTimer = window.setTimeout(() => {
          setShowSwipeHint(false);
          try {
            window.sessionStorage.setItem("tqb-swipe-hint-seen", "true");
          } catch {
            // The hint can safely disappear even when storage is unavailable.
          }
        }, 4600);
        observer.disconnect();
      },
      { threshold: 0.18 },
    );

    observer.observe(menuElement);
    return () => {
      observer.disconnect();
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > Math.max(720, window.innerHeight * 0.85));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const searchResults = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("es-MX");
    if (!term) return [];

    return menuSections.flatMap((section, sectionIndex) =>
      section.items
        .filter((item) =>
          `${item.name} ${item.detail ?? ""}`
            .toLocaleLowerCase("es-MX")
            .includes(term),
        )
        .map((item) => ({ item, section, sectionIndex })),
    );
  }, [query]);

  const goToCategory = (index: number) => {
    swiper?.slideTo(index);
    setActiveIndex(index);
    document.getElementById("menu")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const selectSearchResult = (sectionIndex: number) => {
    setSearchOpen(false);
    setQuery("");
    goToCategory(sectionIndex);
  };

  const selectCategory = (sectionIndex: number) => {
    setCategoryMenuOpen(false);
    goToCategory(sectionIndex);
  };

  const handleSlideChange = (instance: SwiperInstance) => {
    setActiveIndex(instance.activeIndex);
    if (showSwipeHint) {
      setShowSwipeHint(false);
      try {
        window.sessionStorage.setItem("tqb-swipe-hint-seen", "true");
      } catch {
        // Swiping remains fully functional without storage.
      }
    }
  };

  return (
    <main>
      <motion.header
        className="hero"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55 }}
      >
        <div className="hero-rule" aria-hidden="true">
          <span />
          <small>Restaurante &middot; Bar &middot; Familiar</small>
          <span />
        </div>

        <motion.div
          className="logo-wrap"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 130, damping: 18, delay: 0.08 }}
        >
          <Image
            src={logo}
            alt="Te Quiero Botanero &mdash; Come, bebe y canta"
            priority
            sizes="(max-width: 640px) 190px, 240px"
          />
        </motion.div>

        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <span className="eyebrow">Te Quiero Botanero</span>
          <h1>Sabor para <em>compartir</em></h1>
          <p>Antojitos, botanas y especialidades para disfrutar juntos, siempre preparados al momento.</p>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32 }}
        >
          <span><FiClock aria-hidden="true" /> 14:00&ndash;23:00</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Vicente+Guerrero+27A+Centro+Banderilla+Veracruz"
            target="_blank"
            rel="noreferrer"
          >
            <FiMapPin aria-hidden="true" /> Banderilla, Ver.
          </a>
        </motion.div>

        <a className="hero-cta" href="#menu">
          Ver men&uacute; <FiArrowRight aria-hidden="true" />
        </a>
      </motion.header>

      <section className="menu-shell" id="menu" aria-label="Men&uacute; de alimentos">
        <div className="menu-toolbar">
          <div className="compact-brand">
            <Image src={logo} alt="" sizes="44px" />
            <div>
              <span className="eyebrow">Men&uacute; completo</span>
              <p>{menuSections[activeIndex].shortTitle}</p>
            </div>
          </div>
          <div className="menu-toolbar-actions">
            <button
              type="button"
              className="category-list-button"
              onClick={() => setCategoryMenuOpen(true)}
              aria-label="Ver todas las categor&iacute;as"
              aria-expanded={categoryMenuOpen}
              aria-controls="category-sheet"
            >
              <FiGrid aria-hidden="true" />
            </button>
            <button
              type="button"
              className="search-button"
              onClick={() => setSearchOpen(true)}
              aria-label="Buscar un platillo"
            >
              <FiSearch aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav className="category-nav" aria-label="Categor&iacute;as del men&uacute;">
          <div className="category-nav-inner" ref={navRef}>
            {menuSections.map((section, index) => (
              <button
                type="button"
                key={section.id}
                data-index={index}
                className={activeIndex === index ? "active" : ""}
                aria-current={activeIndex === index ? "page" : undefined}
                onClick={() => goToCategory(index)}
              >
                <small>{String(index + 1).padStart(2, "0")}</small>
                {section.shortTitle}
              </button>
            ))}
          </div>
        </nav>

        <div className="menu-book">
<AnimatePresence>
            {showSwipeHint && activeIndex === 0 && (
              <motion.div
                className="swipe-hint"
                role="status"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
              >
                <FiArrowLeft aria-hidden="true" />
                <span>Desliza para ver m&aacute;s</span>
                <FiArrowRight aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>
          <Swiper
            modules={[Pagination, Keyboard, A11y]}
            autoHeight
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            speed={reduceMotion ? 0 : 520}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            aria-label="Categor&iacute;as del men&uacute;"
          >
            {menuSections.map((section, index) => (
              <SwiperSlide key={section.id}>
                <MenuPage section={section} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="page-controls" aria-label="Paginaci&oacute;n del men&uacute;">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            disabled={activeIndex === 0}
            aria-label="Categor&iacute;a anterior"
          >
            <FiArrowLeft aria-hidden="true" />
          </button>
          <div className="page-count" aria-live="polite">
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <span aria-hidden="true" />
            <small>{String(menuSections.length).padStart(2, "0")}</small>
          </div>
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            disabled={activeIndex === menuSections.length - 1}
            aria-label="Categor&iacute;a siguiente"
          >
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="services-section">
        <div className="section-intro">
          <span className="eyebrow">M&aacute;s que un men&uacute;</span>
          <h2>Estamos a tu servicio</h2>
          <p>Gracias por tu confianza. Aqu&iacute; siempre hay un buen motivo para quedarte.</p>
        </div>
        <div className="service-grid">
          {serviceHighlights.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? FiStar;
            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.24) }}
              >
                <Icon aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src={logo} alt="" sizes="110px" />
          <div>
            <span className="eyebrow">Te Quiero Botanero</span>
            <p>Vicente Guerrero 27A, Colonia Centro, Banderilla, Veracruz.</p>
          </div>
        </div>
        <div className="footer-actions">
          <a href="tel:+522288246410"><FiPhone aria-hidden="true" /> Llamar</a>
          <a
            href="https://wa.me/522288246410?text=Hola%2C%20quiero%20informaci%C3%B3n%20de%20Te%20Quiero%20Botanero"
            target="_blank"
            rel="noreferrer"
          >
            <FiMessageCircle aria-hidden="true" /> WhatsApp
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Vicente+Guerrero+27A+Centro+Banderilla+Veracruz"
            target="_blank"
            rel="noreferrer"
          >
            <FiMapPin aria-hidden="true" /> C&oacute;mo llegar
          </a>
        </div>
        <p className="responsible-note">Disfruta con medida &middot; El consumo excesivo de alcohol es perjudicial para la salud.</p>
      </footer>

      <div className="mobile-dock" aria-label="Acciones r&aacute;pidas">
        <a href="#menu"><FiMenu aria-hidden="true" /><span>Men&uacute;</span></a>
        <a href="tel:+522288246410"><FiPhone aria-hidden="true" /><span>Llamar</span></a>
        <a
          href="https://wa.me/522288246410?text=Hola%2C%20quiero%20informaci%C3%B3n%20de%20Te%20Quiero%20Botanero"
          target="_blank"
          rel="noreferrer"
        >
          <FiMessageCircle aria-hidden="true" /><span>WhatsApp</span>
        </a>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.82, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.82, y: 10 }}
            aria-label="Volver al inicio"
          >
            <FiArrowUp aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="search-panel"
              initial={reduceMotion ? false : { y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 270, damping: 29 }}
            >
              <div className="search-panel-heading">
                <div>
                  <span className="eyebrow">Encuentra tu antojo</span>
                  <h2 id="search-title">Buscar en el men&uacute;</h2>
                </div>
                <button type="button" onClick={() => setSearchOpen(false)} aria-label="Cerrar b&uacute;squeda">
                  <FiX aria-hidden="true" />
                </button>
              </div>
              <label className="search-field">
                <FiSearch aria-hidden="true" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ej. arrachera, papas, camar&oacute;n..."
                />
              </label>
              <div className="search-results">
                {!query.trim() && <p className="search-empty">Escribe el nombre de un platillo o ingrediente.</p>}
                {query.trim() && searchResults.length === 0 && (
                  <p className="search-empty">No encontramos coincidencias. Prueba con otra palabra.</p>
                )}
                {searchResults.map(({ item, section, sectionIndex }) => (
                  <button
                    type="button"
                    key={`${section.id}-${item.name}`}
                    onClick={() => selectSearchResult(sectionIndex)}
                  >
                    <span>
                      <small>{section.title}</small>
                      <strong>{item.name}</strong>
                      {item.detail && <em>{item.detail}</em>}
                    </span>
                    <Price value={item.price} />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {categoryMenuOpen && (
          <motion.div
            className="category-sheet-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="category-sheet-title"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCategoryMenuOpen(false)}
          >
            <motion.div
              className="category-sheet"
              id="category-sheet"
              initial={reduceMotion ? false : { y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="category-sheet-heading">
                <div>
                  <span className="eyebrow">Ir directamente a</span>
                  <h2 id="category-sheet-title">Todas las categor&iacute;as</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setCategoryMenuOpen(false)}
                  aria-label="Cerrar categor&iacute;as"
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>
              <div className="category-sheet-grid">
                {menuSections.map((section, index) => (
                  <button
                    type="button"
                    key={section.id}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => selectCategory(index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{section.title}</strong>
                    <FiArrowRight aria-hidden="true" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

