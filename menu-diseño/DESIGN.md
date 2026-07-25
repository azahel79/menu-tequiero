---
name: Botanero Editorial
colors:
  surface: '#fdf9f2'
  surface-dim: '#dddad3'
  surface-bright: '#fdf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ec'
  surface-container: '#f1ede6'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#4a4640'
  inverse-surface: '#31302c'
  inverse-on-surface: '#f4f0e9'
  outline: '#7c766f'
  outline-variant: '#ccc5bd'
  surface-tint: '#605e5c'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1a'
  on-primary-container: '#868382'
  inverse-primary: '#cac6c4'
  secondary: '#845400'
  on-secondary: '#ffffff'
  secondary-container: '#ffad2f'
  on-secondary-container: '#6c4400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#291800'
  on-tertiary-container: '#9d7f56'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e6e2df'
  primary-fixed-dim: '#cac6c4'
  on-primary-fixed: '#1c1b1a'
  on-primary-fixed-variant: '#484645'
  secondary-fixed: '#ffddb5'
  secondary-fixed-dim: '#ffb958'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#ffddb2'
  tertiary-fixed-dim: '#e4c193'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#5a421f'
  background: '#fdf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e6e2db'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is rooted in the "New Mexican Editorial" movement—a fusion of traditional hospitality and high-end print journalism. It evokes the feeling of a sun-drenched afternoon in a high-end CDMX cantina. The brand personality is sophisticated yet welcoming, trading cluttered graphics for intentional whitespace and hairline strokes.

The visual style is **Minimalist with a Heritage twist**. It avoids digital-native trends like heavy blurs or vibrant neon, opting instead for a tactile, "paper-first" aesthetic. Every interface element should feel like it was curated for a physical menu, emphasizing legibility, balance, and the warmth of the natural palette.

## Colors

The palette is anchored by **Warm Ivory** and **Deep Charcoal**, creating a high-contrast foundation that remains soft on the eyes. 

- **Primary & Neutral:** The Ivory and Warm White work together to create subtle depth without relying on shadows.
- **Accents:** **Beer Amber** is reserved for calls to action and interactive states, representing the golden hues of a botanero's core offering. **Gold Beige** serves as a sophisticated supporting accent for iconography and labels.
- **Dividers:** Use the border color exclusively in 1px widths to maintain the delicate editorial structure.

## Typography

Typography is the primary driver of the brand's premium feel. 

- **Bodoni Moda** is used for storytelling, menu categories, and impact statements. Use italic variants sparingly for a poetic, literary touch.
- **Manrope** provides a functional, modern counterpoint for descriptions, prices, and navigation. 
- **Hierarchy:** Use large font size differentials to create a clear "reading" experience. Tight line-heights are reserved for large displays, while generous leading (1.6) is applied to body text for maximum comfort.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy on desktop to mimic the constraints of a printed page, and a fluid layout on mobile for accessibility.

- **Desktop:** 12-column grid with a max-width of 1280px. Margins are intentionally wide (64px) to frame content as if it were a high-quality journal.
- **Mobile:** 4-column grid with 20px margins.
- **Editorial Spacing:** Use `xxl` (80px) vertical spacing between major sections to emphasize the premium nature of the brand. Fine 1px horizontal lines should be used to separate menu items or list entries, extending to the full width of the container.

## Elevation & Depth

To maintain the "high-end print" aesthetic, this design system avoids traditional box shadows and blurs.

- **Flat Layering:** Depth is communicated through color blocking. Higher-level elements (like a modal or card) use the `Secondary Surface` (#FFFDF8) against the `Primary Background` (#F7F3EC).
- **Hairline Borders:** Use 1px borders in #D9C8B3 to define interactive areas and separate content blocks.
- **No Shadows:** Do not use CSS box-shadows. If an element needs to "pop," use a slightly darker background shade or a thicker (2px) accent border instead of a shadow.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Square corners reinforce the editorial, architectural feel of the brand. This applies to buttons, input fields, images, and cards. The only exception to the sharp-edge rule is for circular iconography or standard radio buttons, but all containers must remain rectilinear to maintain a disciplined, structural look.

## Components

### Buttons
- **Primary:** Solid Deep Charcoal (#181716) with White text. Sharp corners.
- **Secondary:** Transparent background, 1px Deep Charcoal border.
- **Tertiary:** Underlined text using the Beer Amber (#E89A16) for the underline only.

### Input Fields
- **Style:** Bottom-border only (1px #D9C8B3). Labels should use `label-caps` typography positioned above the field.
- **Focus:** The bottom border changes to Beer Amber (#E89A16).

### Cards
- **Menu Cards:** No background, no border. Content is separated by 1px horizontal lines.
- **Featured Cards:** Warm White (#FFFDF8) background with a 1px border in #D9C8B3.

### Chips & Tags
- Small, rectangular boxes with `label-caps` text. Use Gold Beige (#C8A77B) for the border or as a very light background fill (10% opacity).

### List Items
- Use `headline-sm` for item titles and `body-md` for descriptions. Prices should be right-aligned in `body-md` Bold. Items are separated by a subtle 1px divider.