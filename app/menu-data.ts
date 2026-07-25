export type MenuItem = {
  name: string;
  price: number;
  detail?: string;
  featured?: boolean;
};

export type MenuSection = {
  id: string;
  shortTitle: string;
  title: string;
  eyebrow: string;
  intro?: string;
  items: MenuItem[];
  flavors?: string[];
};

export const menuSections: MenuSection[] = [
  {
    id: "antojeria",
    shortTitle: "Antojer\u00eda",
    title: "Antojer\u00eda",
    eyebrow: "Sabor de casa",
    intro: "Antojitos mexicanos preparados para compartir o disfrutar por tu cuenta.",
    items: [
      { name: "Tacos dorados (4)", price: 50, detail: "Pollo o papa" },
      { name: "Empanadas (3)", price: 45, detail: "Pollo, queso o picadillo" },
      { name: "Tostadas (3)", price: 50, detail: "Pollo, pastor o chilorio" },
      { name: "Garnachas (6)", price: 60, detail: "Rojas y verdes de res" },
      { name: "Picadas sencillas (4)", price: 45, detail: "Salsa y frijol" },
      { name: "Picadas preparadas (4)", price: 70, detail: "Carne a elegir" },
      { name: "Panuchos (3)", price: 60, detail: "Pollo, pastor o chilorio" },
      { name: "Pupusas (3)", price: 45, detail: "Tortilla gruesa rellena con ensalada de encurtido" },
      { name: "Pambacitos (3)", price: 60, detail: "Jam\u00f3n, pollo, frijol y chorizo" },
      { name: "Gorditas tapadas (3)", price: 45, detail: "Masa negra, chicharr\u00f3n y ensalada de nopales" },
      { name: "Picada Te Quiero Botanero", price: 85, detail: "Salsa, carne a elegir y queso de hebra", featured: true },
    ],
  },
  {
    id: "taqueria",
    shortTitle: "Taquer\u00eda",
    title: "Taquer\u00eda",
    eyebrow: "Orden de tres",
    intro: "Todas las \u00d3rdenes se sirven con doble tortilla.",
    items: [
      { name: "Asada", price: 65 },
      { name: "Milanesa", price: 65 },
      { name: "Chuleta ahumada", price: 65 },
      { name: "Carne enchilada", price: 65 },
      { name: "Pastor", price: 65 },
      { name: "Arrachera", price: 70 },
      { name: "Mix de tacos", price: 70 },
    ],
  },
  {
    id: "especialidades",
    shortTitle: "Especialidades",
    title: "Especialidades",
    eyebrow: "Favoritos de la casa",
    intro: "Platillos abundantes con el sello especial de Te Quiero Botanero.",
    items: [
      { name: "Tablita norte\u00f1a", price: 149, detail: "Dos carnes a elegir, chorizo, queso asado, frijoles refritos con totopos, pl\u00e1tanos fritos, papas a la francesa, cebollines y tres picaditas o chilaquiles.", featured: true },
      { name: "Orejas de elefante", price: 149, detail: "Milanesa gigante de pollo o res, gratinada con papas a la francesa, pl\u00e1tanos fritos, chilaquiles rojos y verdes y frijoles con totopos.", featured: true },
      { name: "Torta cubana", price: 99, detail: "Torta gigante de pierna envinada, jam\u00f3n, salchicha, chorizo, queso de hebra, queso americano, milanesa, aguacate y tomate." },
      { name: "Baguette cubano", price: 99, detail: "Baguette de 20 cm con pierna envinada, jam\u00f3n, salchicha, chorizo, queso de hebra, queso americano, milanesa, aguacate y tomate." },
      { name: "Volc\u00e1n de arrachera", price: 65, detail: "Tostada crujiente con base de queso Oaxaca gratinado, cama de guacamole y arrachera." },
      { name: "Alambre de res", price: 99, detail: "Carne de res, tocino, cebolla, pimientos y queso gratinado." },
    ],
  },
  {
    id: "para-compartir",
    shortTitle: "Para compartir",
    title: "Platones para compartir",
    eyebrow: "Al centro de la mesa",
    intro: "Combinaciones completas para probar un poco de todo.",
    items: [
      { name: "Antojitos", price: 75, detail: "Pambacito, pupusa, tostada de chilorio, gordita tapada y panucho." },
      { name: "Snack", price: 125, detail: "Papas gajo, aros de cebolla, dedos de queso, alitas y salchipapas." },
      { name: "Charola especial botanera", price: 199, detail: "Hamburguesa cl\u00e1sica, dos tacos de milanesa, dos tacos de asada, nachos cl\u00e1sicos, papas a la francesa y ocho alitas.", featured: true },
      { name: "Te Quiero Botanero", price: 149, detail: "Queso panela, manchego, jam\u00f3n, carne asada, chistorra, aceitunas, pan con aderezo y rajas de xalape\u00f1o.", featured: true },
    ],
  },
  {
    id: "hamburguesas",
    shortTitle: "Hamburguesas",
    title: "Hamburguesas",
    eyebrow: "Grandes y botaneras",
    items: [
      { name: "Cl\u00e1sica", price: 65 },
      { name: "Hawaiana", price: 80 },
      { name: "Doble", price: 90 },
      { name: "Boneless de pollo", price: 90, detail: "Elige el sabor" },
      { name: "Cheese and French", price: 99, detail: "Queso de nachos y papas a la francesa" },
      { name: "Hoops guacamole", price: 90, detail: "Aros de cebolla y guacamole" },
      { name: "Te Quiero Botanero", price: 135, detail: "Doble carne, queso americano, queso de hebra, pierna envinada, jam\u00f3n, salchicha, tocino y chorizo.", featured: true },
    ],
  },
  {
    id: "hot-dogs",
    shortTitle: "Hot Dogs",
    title: "Hot Dog Jumbo",
    eyebrow: "Sabor a lo grande",
    items: [
      { name: "Cl\u00e1sico", price: 45 },
      { name: "Hawaiano", price: 55 },
      { name: "Boneless de pollo", price: 70, detail: "Elige el sabor" },
      { name: "Pizza dog", price: 80, detail: "Pomodoro, salchicha envuelta en tocino, manchego y pepperoni." },
      { name: "Xalape\u00f1o Popper Dog (TQB)", price: 80, detail: "Xalape\u00f1o relleno de queso crema, envuelto en tocino y con guacamole.", featured: true },
    ],
  },
  {
    id: "tortas-baguettes",
    shortTitle: "Tortas",
    title: "Torta o Baguette Jumbo",
    eyebrow: "Elige tu favorita",
    items: [
      { name: "Asada", price: 65 },
      { name: "Milanesa", price: 65 },
      { name: "Arrachera", price: 75 },
      { name: "Carne enchilada", price: 65 },
      { name: "Pastor", price: 65 },
    ],
  },
  {
    id: "mariscos",
    shortTitle: "Mariscos",
    title: "Mariscos",
    eyebrow: "Frescos y preparados",
    items: [
      { name: "C\u00f3ctel de camar\u00f3n", price: 80 },
      { name: "Shots de camar\u00f3n", price: 60, detail: "Cuatro piezas con salsas mixtas" },
      { name: "Camarones", price: 120, detail: "Mojo de ajo, enchipotlados, a la plancha o empanizados" },
      { name: "Mojarra", price: 120, detail: "Frita, al mojo de ajo o enchipotlada" },
    ],
  },
  {
    id: "alitas-boneless",
    shortTitle: "Alitas",
    title: "Alitas y Boneless",
    eyebrow: "Elige tama\u00f1o y sabor",
    intro: "Crujientes, abundantes y preparadas con tu salsa favorita.",
    items: [
      { name: "Personal", price: 80, detail: "8 piezas" },
      { name: "Compartir", price: 160, detail: "16 piezas" },
      { name: "Familiar", price: 290, detail: "1 kg \u00b7 32 piezas", featured: true },
    ],
    flavors: ["Queso parmesano", "Lemon pepper", "Mantequilla", "Mango habanero", "Ranch", "BBQ", "Teriyaki", "BBQ chipotle", "Tamarindo chipotle", "Chipotle, miel y mayonesa", "Pi\u00f1a habanero", "TQB \u00b7 chile de \u00e1rbol y naranja", "Doritos", "Takis", "Ruffles"],
  },
  {
    id: "botanas-snacks",
    shortTitle: "Botanas",
    title: "Botanas / Snack",
    eyebrow: "Para botanear",
    items: [
      { name: "Palomitas ACT II", price: 40 },
      { name: "Palomitas de ma\u00edz en cubeta", price: 35 },
      { name: "Frituras en cubeta", price: 35 },
      { name: "Cacahuates picositos", price: 30 },
      { name: "Papas a la francesa", price: 65, detail: "250 g" },
      { name: "Papas francesas Te Quiero Botanero", price: 85, featured: true },
      { name: "Papas gajo", price: 75 },
      { name: "Nachos cl\u00e1sicos", price: 55 },
      { name: "Nachos Te Quiero Botanero", price: 85, featured: true },
      { name: "Maruchan Te Quiero Botanero", price: 70, featured: true },
      { name: "Salchipapas", price: 70 },
      { name: "Dedos de queso", price: 70 },
      { name: "Aros de cebolla", price: 70 },
    ],
  },
  {
    id: "extras",
    shortTitle: "Extras",
    title: "Extras",
    eyebrow: "Completa tu orden",
    items: [
      { name: "Carne de hamburguesa de res", price: 25 },
      { name: "Otros acompa\u00f1amientos", price: 15 },
    ],
  },
];

export const serviceHighlights = [
  { title: "Botana gratis", detail: "En consumo de bebidas con alcohol, de 2 a 6 p. m.", icon: "botana" },
  { title: "Men\u00fa de mariscos", detail: "Tres tiempos, de lunes a viernes de 2 a 7 p. m.", icon: "mariscos" },
  { title: "Men\u00fa infantil", detail: "Tres tiempos, de lunes a viernes de 2 a 7 p. m.", icon: "infantil" },
  { title: "M\u00fasica y diversi\u00f3n", detail: "Karaoke, juegos de mesa, m\u00fasica viva y promociones.", icon: "musica" },
  { title: "Tu evento", detail: "Paquetes en nuestras instalaciones de acuerdo con tu presupuesto.", icon: "evento" },
];

