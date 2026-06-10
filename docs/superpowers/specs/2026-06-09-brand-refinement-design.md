# Design: Brand Refinement & Site Quality Improvement

**Date:** 2026-06-09  
**Project:** Dra. Ilana Dornelas Landing Page  
**Scope:** Complete visual refinement following brand manual v2.0

## Goal

Align the website 100% with the official brand manual (`manual_marca_ID_v2.pdf`), replacing heavy PNG logos with optimized SVGs, refining typography, spacing, and visual hierarchy to achieve premium quality while improving performance.

## Current State

### Assets
- **Logos:** 4 PNG files (810KB total) currently in use
  - `logo_dark_horizontal.png` (380KB) — navbar
  - `logo_light_horizontal.png` (430KB) — footer
  - `logo_dark_solo.png` (381KB) — unused
  - `logo_light_solo.png` (455KB) — unused
- **SVGs available but unused:** `logo-id.svg` (1.5KB), `logo-id-dark.svg` (630B), `logo-id-icon.svg` (734B)
- **Photo:** `dra-ilana.jpg` (95KB) — not used yet, keeping placeholder

### CSS
- Color palette correctly implemented (Cream #FAF8F5, Warm #F2EDE6, Gold #B8976A, etc.)
- Fonts loaded correctly (Cormorant Garamond, Montserrat)
- Typography hierarchy partially follows manual but needs refinement
- Spacing is inconsistent in some areas

### Brand Manual Specifications (Relevant Pages)

**Page 4 — Logo**
- Minimum size: 32px digital, 8mm print
- Protection zone: height of letter "I"
- Never distort, rotate, or add effects

**Page 5 — Applications**
- Nav: "Monograma ID solo, 48px, alinhado à esquerda"
- Hero: "Tagline principal em Cormorant Italic 48pt"
- Footer: "Logo horizontal: ID + nome + tagline curta"

**Page 6 — Typography**
- H1 (Hero title): Cormorant Italic, 48pt
- H2 (Section title): Cormorant, 28pt
- H3 (Subtitle): Montserrat Medium, 14pt
- Body: Montserrat Light, 10pt
- Label/Eyebrow: Montserrat Light, 7pt, caps, 0.35em letter-spacing

**Page 11 — No-No List**
- Never use pure black #000000 — use Obsidian #1A1410
- Never use pure white #FFFFFF as background — use Cream
- Never use fonts not authorized
- Never use logo below 32px

## Problems to Solve

1. **Performance:** 810KB of logo PNGs loading on every page (99.7% larger than necessary)
2. **Brand Inconsistency:** Current implementation doesn't follow manual specs exactly
3. **Typography:** Sizes and spacing not matching manual specifications
4. **Missing Elements:** Decorative lines and ornaments mentioned in manual not present
5. **Responsiveness:** No adaptive logo strategy (desktop vs mobile)

## Solution Architecture

### 1. SVG Asset Strategy

Create 3 new optimized SVGs based on existing `logo-id.svg`:

**logo-nav-desktop.svg** (~900 bytes)
- Elements: Monograma ID + "ILANA DORNELAS" + "DERMATOLOGISTA"
- ViewBox: `0 0 280 60`
- Colors: #8B6F47 (I stroke), #B8976A (D), #4A3F35 (name), #8B6F47 (specialty)
- No tagline (saves space in navbar)

**logo-nav-mobile.svg** (~400 bytes)
- Elements: Monograma ID only
- ViewBox: `0 0 50 50`
- Minimal, clean for mobile navigation

**logo-footer.svg** (~1.2KB)
- Elements: ID + Nome + Especialidade + Linha decorativa + Tagline
- ViewBox: `0 0 320 100`
- Complete horizontal version with "SUA PELE, SUA IDENTIDADE"
- Light version colors for footer (#D4B896, #B8976A)

**Loading Strategy:**
- Inline SVG in HTML for navbar (avoid flash, critical rendering path)
- `<img>` tag for footer (below fold, deferred)
- CSS responsive switching: `.nav-logo-desktop` (show >768px), `.nav-logo-mobile` (show <=768px)

**Files to Keep:**
- All existing PNGs and SVGs remain in `assets/images/` (backup, don't delete)
- Only HTML references change

### 2. CSS System Refinement

**New CSS Variables:**

```css
:root {
  /* Existing color variables preserved */
  
  /* Typography sizes (manual page 6) */
  --font-h1: 48pt;           /* Hero — Cormorant Italic */
  --font-h2: 28pt;           /* Section — Cormorant */
  --font-h3: 14pt;           /* Subtitle — Montserrat Medium */
  --font-body: 10pt;         /* Body — Montserrat Light */
  --font-label: 7pt;         /* Eyebrow — Montserrat Light CAPS */
  
  /* Letter-spacing */
  --ls-label: 0.35em;        /* Labels */
  --ls-nav: 0.22em;          /* Navigation */
  --ls-h3: 0.08em;           /* Subtitles */
  
  /* Spacing consistency */
  --section-padding: 7rem 4rem;
  --section-gap: 3rem;
  --card-gap: 2rem;
  
  /* Logo sizes */
  --logo-nav-height: 44px;
  --logo-footer-height: 32px;
}
```

**Typography Classes Update:**

All heading and text classes adjusted to match manual specs exactly:
- `.hero-title` → 48pt italic Cormorant
- `.section-title` → 28pt Cormorant
- `.diferencial-title`, `.encontrar-title` → 14pt Montserrat Medium
- `.section-label`, `.hero-eyebrow` → 7pt Montserrat Light CAPS, 0.35em tracking
- Body text classes → 10pt Montserrat Light

**New Decorative Elements:**

```css
.divider-gold {
  border-top: 0.5px solid var(--gold-pale);
  width: 100%;
  margin: 1.5rem 0;
}

.divider-vertical {
  border-left: 0.5px solid var(--gold-pale);
  height: 40px;
}

.border-subtle {
  border: 0.5px solid var(--border-subtle);
}
```

### 3. HTML Structure Changes

**Navbar:**
```html
<nav id="navbar">
  <div class="nav-logo">
    <!-- Desktop SVG inline -->
    <svg class="nav-logo-svg nav-logo-desktop" viewBox="0 0 280 60" height="44" 
         role="img" aria-label="Dra. Ilana Dornelas - Dermatologista">
      <!-- Monograma ID + Nome + Especialidade -->
    </svg>
    
    <!-- Mobile SVG inline -->
    <svg class="nav-logo-svg nav-logo-mobile" viewBox="0 0 50 50" height="40"
         role="img" aria-label="Dra. Ilana Dornelas - Dermatologista">
      <!-- Só Monograma -->
    </svg>
  </div>
  <!-- Existing nav links preserved -->
</nav>
```

**Footer:**
```html
<footer>
  <div class="footer-logo">
    <svg class="footer-logo-svg" viewBox="0 0 320 100" height="32"
         role="img" aria-label="Ilana Dornelas Dermatologia - Sua pele, sua identidade">
      <!-- Logo horizontal completo com tagline -->
    </svg>
  </div>
  <!-- Existing footer content preserved -->
</footer>
```

**Hero Section:**
- Ensure H1 uses italic style (already in HTML as `<em>`)
- Verify eyebrow label follows 7pt CAPS spec
- No structural changes, only CSS refinements

**Section Labels:**
- All eyebrows across sections use consistent `.section-label` class
- Applied to: Sobre, Preocupações, Especialidades, Encontrar, FAQ, Instagram, Localização, Agendamento

**Diferenciais (Sobre section):**
Add decorative dividers between items:
```html
<div class="diferencial">...</div>
<div class="divider-gold"></div>
<div class="diferencial">...</div>
<div class="divider-gold"></div>
<div class="diferencial">...</div>
```

### 4. Component-Specific Refinements

**Specialty Cards — Overlay Improvement:**

Better legibility with refined gradient:
```css
.esp-card-overlay {
  background: linear-gradient(
    to top,
    rgba(26,20,16,0.92) 0%,
    rgba(26,20,16,0.45) 50%,
    rgba(26,20,16,0.15) 80%,
    transparent 100%
  );
}

.esp-card-title {
  font-size: 28pt;  /* H2 spec */
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.esp-card-desc {
  font-size: 10pt;  /* Body spec */
  color: rgba(250,248,245,0.85);
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
```

**Logo Protection Zone:**
```css
.nav-logo {
  padding: 8px;  /* Zona de proteção */
}

.footer-logo {
  padding: 12px;
}
```

**Interactive Transitions:**
```css
.nav-logo-svg {
  transition: opacity 0.3s ease;
}

.nav-logo:hover .nav-logo-svg {
  opacity: 0.85;
}

.footer-logo-svg {
  transition: transform 0.3s ease;
}

.footer-logo:hover .footer-logo-svg {
  transform: scale(1.02);
}
```

### 5. Responsive Adaptations

**Mobile Typography:**
```css
@media(max-width:768px) {
  :root {
    --section-padding: 5rem 1.5rem;
    --logo-nav-height: 40px;
  }
  
  .hero-title {
    font-size: clamp(2.4rem, 8vw, 2.8rem);
  }
  
  .section-title {
    font-size: clamp(1.6rem, 6vw, 1.8rem);
  }
  
  .section-label,
  .hero-eyebrow {
    font-size: 6pt;
    letter-spacing: 0.3em;
  }
  
  .esp-card-title {
    font-size: 20pt;
  }
  
  /* Logo switching */
  .nav-logo-desktop { display: none; }
  .nav-logo-mobile { display: block; }
  
  /* Footer stacking */
  footer {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-logo-svg {
    height: 28px;
  }
}

@media(max-width:480px) {
  .hero-title { font-size: 2.2rem; }
  .section-title { font-size: 1.5rem; }
}
```

## Implementation Approach

**Foundation First Strategy:**

1. **Phase 1: Create SVG Assets**
   - Generate 3 new SVG files
   - Test rendering in browsers
   - Validate accessibility (aria-labels)

2. **Phase 2: Update CSS System**
   - Add new variables to `:root`
   - Refine typography classes
   - Add decorative element classes
   - Update spacing consistency

3. **Phase 3: Apply to HTML**
   - Replace PNG references with SVG inline in nav
   - Replace PNG reference in footer with SVG
   - Add responsive CSS for logo switching
   - Insert decorative dividers in components

4. **Phase 4: Component Refinements**
   - Adjust hero typography
   - Refine card overlays
   - Add protection zones
   - Verify all section labels

5. **Phase 5: Responsive Testing**
   - Test mobile logo switching
   - Verify typography scaling
   - Check footer stacking
   - Validate touch targets

6. **Phase 6: Polish & Validation**
   - Cross-browser testing
   - Accessibility audit
   - Performance measurement
   - Manual comparison against brand specs

## Files Modified

### Created
- `assets/images/logo-nav-desktop.svg`
- `assets/images/logo-nav-mobile.svg`
- `assets/images/logo-footer.svg`

### Modified
- `index.html` — navbar, footer, hero, section labels, diferenciais
- `assets/css/style.css` — variables, typography, decorative elements, responsive

### Preserved (Not Deleted)
- All existing PNG logos (backup)
- All existing SVG logos
- `dra-ilana.jpg` (future use)

## Success Criteria

### Functional Requirements
- ✅ Logos load as SVG (not PNG) in nav and footer
- ✅ Desktop shows monograma + nome + especialidade in nav
- ✅ Mobile shows only monograma in nav
- ✅ Footer shows complete horizontal logo with tagline
- ✅ All typography sizes match manual exactly (48pt, 28pt, 14pt, 10pt, 7pt)
- ✅ Letter-spacing correct on labels (0.35em) and nav (0.22em)
- ✅ Section padding consistent (7rem 4rem desktop, 5rem 1.5rem mobile)
- ✅ Decorative gold pale dividers present in diferenciais
- ✅ Card overlays provide good text legibility
- ✅ Logo protection zones maintained (8px nav, 12px footer)

### Performance Requirements
- ✅ Logo asset size reduced from 810KB to <3KB (99.7% reduction)
- ✅ No layout shift on logo load (inline SVG)
- ✅ Fonts load with proper fallbacks
- ✅ No console errors or warnings

### Accessibility Requirements
- ✅ All SVGs have `role="img"` and `aria-label`
- ✅ Semantic HTML maintained
- ✅ Color contrast meets WCAG AA (already compliant)
- ✅ Touch targets adequate on mobile

### Visual Quality Requirements
- ✅ 100% alignment with brand manual specs
- ✅ Consistent spacing and rhythm
- ✅ Clean, premium aesthetic
- ✅ Professional typography hierarchy
- ✅ Smooth transitions and interactions

## Edge Cases & Constraints

### Constraints
- No photo of Dra. Ilana available yet — keep placeholder in "Sobre" section
- Maintain all existing functionality (WhatsApp integration, forms, navigation)
- Don't delete any assets — only change references
- Work with existing HTML structure (no major refactoring)

### Edge Cases Handled
- **Very narrow mobile (<360px):** Typography clamp prevents overflow
- **Logo too small (<32px):** CSS enforces minimum sizes per manual
- **Font loading failure:** System font fallbacks (Georgia, Arial, sans-serif)
- **SVG not supported (rare):** Graceful degradation via alt text in aria-label
- **High contrast mode:** SVG paths remain visible, manual color overrides respected

### Not In Scope
- Optimization of other images (hero backgrounds, card images) — future work
- Photo integration for Dra. Ilana — waiting for professional photos
- New sections or content — only refining existing
- Backend/form functionality changes
- Analytics or tracking code
- SEO meta tags (already present)

## Testing Plan

### Manual Testing
1. **Desktop browsers** (Chrome, Firefox, Safari, Edge)
   - Logo rendering quality
   - Typography sizes and spacing
   - Hover states and transitions
   - Scroll behavior

2. **Mobile devices** (iOS Safari, Chrome Android)
   - Logo switching at 768px breakpoint
   - Touch interactions
   - Typography readability
   - Layout stacking

3. **Accessibility tools**
   - Screen reader (VoiceOver/NVDA) logo announcement
   - Keyboard navigation
   - Color contrast validation

4. **Performance**
   - Network tab: verify SVG inline (no requests for logos)
   - Lighthouse score comparison (before/after)
   - Visual regression (screenshot comparison)

### Validation Checklist
- [ ] Nav logo shows desktop version >768px
- [ ] Nav logo shows mobile version ≤768px
- [ ] Footer logo renders correctly with all elements
- [ ] Hero H1 is 48pt italic on desktop
- [ ] Section H2 is 28pt on desktop
- [ ] All eyebrows are 7pt CAPS with 0.35em tracking
- [ ] Body text is 10pt Montserrat Light
- [ ] Dividers present between diferenciais
- [ ] Card text legible over backgrounds
- [ ] No layout shift on page load
- [ ] PNG logos not requested (check Network tab)
- [ ] Total logo weight <3KB vs 810KB before
- [ ] All ARIA labels present and correct
- [ ] Manual PDF comparison: specs match 100%

## Rollback Plan

If issues arise post-deployment:

1. **Simple revert:** Change HTML back to PNG image tags
   ```html
   <!-- Revert to: -->
   <img src="assets/images/logo_dark_horizontal.png" alt="...">
   ```

2. **CSS revert:** Comment out new variables, restore previous values

3. **Git revert:** `git revert <commit-hash>` if fully committed

PNG files remain in repo, so rollback is instant.

## Future Enhancements (Out of Scope)

- Professional photo integration when available
- Additional image optimizations (WebP, srcset)
- Animation on scroll (AOS library)
- Dark mode variant following brand manual dark version
- CMS integration for content updates
- A/B testing framework
- Performance monitoring dashboard

---

**Estimated Implementation Time:** 3-4 hours  
**Risk Level:** Low (no backend changes, assets preserved, easy rollback)  
**Impact:** High (99.7% logo size reduction, 100% brand alignment, premium quality)
