# Design & UX Audit — Awakenings Mental Health

> **Status note.** Items marked **[RESOLVED - location redesign]** were fixed when the
> site moved to a location-first structure, with `/boise-office` and `/meridian-office`
> replacing `/our-providers`. The original finding is left in place so the audit still
> reads as a record of what was found. Everything unmarked is still open.

---

## Typography

1. **Dancing Script for all headings is a liability for a psychiatric clinic.** Cursive/handwritten fonts are notoriously hard to read for users with dyslexia or reading difficulties — a non-trivial population for a mental health practice. The aesthetic choice directly conflicts with the audience's needs.

2. **h2 and h3 are styled as pill/badge/card UI elements** — rounded corners, drop shadows, background fill, box-shadow. These are semantically the most important structural headings on each page but they look like UI chips. It's a deeply unusual treatment that conflicts with how users are trained to read visual hierarchy.

3. **`h2` has `margin-bottom` defined twice in globals.css** — line 441 sets it to `2rem`, line 444 overrides it to `1rem`. One silently kills the other. Classic CSS accumulation bug.

4. **Font Awesome 4.7.0 is loaded sitewide** (as a `<link>` in the `<head>`) but zero `fa-*` classes appear anywhere in the codebase. An entire icon font is being loaded and used for nothing.

5. **Font Awesome 4.7.0 is from 2016.** FA6 has been out for years.

---

## Navigation & Header

6. **No active state on nav links.** When you're on `/articles`, the Articles nav item looks identical to the others. There is no current-page indicator — users have no visual confirmation of where they are.

7. **Header subtitle "Mental Health" is 0.9rem, opacity 0.85, and shrinks to 0.7rem on mobile.** It reads as fine print rather than a meaningful brand descriptor.

8. **Mobile nav breakpoint is 900px, but the hero breakpoint is 768px.** These should be consistent. Inconsistent breakpoints cause components to behave differently at the same viewport width.

9. **The header logo uses `alt=""`** with `aria-hidden="true"` — technically fine if the text beside it is descriptive, but it makes the entire brand link depend solely on the text spans for accessibility, with zero fallback if those spans don't render.

10. **The mobile hamburger animation** — `span:nth-child(1)` gets `translate(4px, 4px)` and `span:nth-child(3)` gets `translate(5px, -5px)`. The translate values are slightly asymmetric (4px vs 5px) so the X formed is not geometrically centered. Small, but the hamburger-to-X animation will look slightly off.

---

## Hero Section

11. **"Your Journey to Wellness Starts Here"** is one of the most overused headlines in mental health. It communicates nothing specific about Awakenings, their approach, their providers, or their location. It's perfectly interchangeable with any competing practice.

12. **Primary hero CTA is "Patient Portal"** — this is a login portal for existing patients. A first-time visitor landing on the site has no portal account. The most prominent button on the entire site is targeted at people who don't need it.

13. **"Est. 2023" hero badge used as a trust signal** — Awakenings is ~3 years old. Establishment year is normally used by businesses to signal longevity and experience. Prominently displaying that you've been open for 3 years undermines the trust signal it's trying to create, especially for patients choosing long-term mental health providers.

14. **The hero background SVG (`uuunion.svg`) has `transform: scaleX(1.2)` applied to it** — it's being horizontally stretched 20% beyond its natural proportions. This is either intentional and distorting a pattern, or an accidental hack to fill space.

15. **No human imagery anywhere in the hero.** For a mental health practice, the most important visual real estate is filled with an abstract geometric pattern. There are no faces, no warmth, no visual human connection.

---

## Services Section

16. **Section h2 is "Medication Management"** but the actual content is a general about-us paragraph. Nothing in the copy is specifically about medication management. The heading actively misleads users about what they're reading.

17. **The background arrow decoration (`pppointed.svg`) is a 1400×1400px absolutely-positioned element** with `overflow: visible` on the parent. It's positioned at `top: 100%` of the capsule with `translate(-50%, -20%)` and a `z-index: -10`. At certain viewport sizes this will bleed visibly into adjacent sections or produce unexpected layout artifacts.

18. **`paddingTop: '4rem'` applied as a direct inline style** on the wrapper div — inconsistent with the rest of the spacing system, hardcoded where a CSS class should be.

19. **"Located right off of state street"** — "state street" is lowercase, reads like rough draft copy. Also duplicated information already shown in the Locations section.  **[RESOLVED - location redesign]** Rewritten to "With offices in Boise and Meridian", which is also now accurate for two offices.

20. **"a large variety of mental health concerns"** — informal and slightly unprofessional phrasing for a medical services description.

---

## Testimonials

21. **Every single testimonial is attributed to "Anonymous Patient."** No first name, no diagnosis category, no location. Three identical anonymous citations feel indistinguishable from fabricated reviews, regardless of their authenticity.

22. **Testimonial 2 is extremely long** and the deck has a fixed height of `280px`. Long testimonials will overflow or get clipped within the fixed container.

23. **The indicator dots are purely decorative.** They don't navigate. Users are trained by carousels to expect clickable dots — these do nothing, which is a false affordance.

24. **The carousel only moves forward.** There's no way to go back to a previous card. If you accidentally cycle past a testimonial, it's gone until you cycle through all of them again.

25. **"Tap or swipe to see more!"** — "tap" is touch-device language. On desktop, users click. This hint is wrong half the time.

26. **"What People Are Saying"** — there are exactly 3 testimonials. The plural "people" is technically accurate but implies a larger body of feedback.

---

## Locations Section

27. **The `.map-cover` div** is a CSS overlay that covers the top 60px of the Google Maps embed to hide Google's personal info bar. This is a hack: it's invisible to users but breaks if Google changes the embed height, and it conceals part of the map itself in the process.

28. **Address formatting is inconsistent** — the Boise address uses `W State St` (no periods) while Meridian uses `W. Ustick Rd.` (with periods). Inconsistent punctuation in published addresses.  **[RESOLVED - location redesign]** Both addresses normalized to the no-period form and stored once in `src/data/locations.js`.

29. **"We now have two convenient locations"** — the word "now" implies a recent announcement. This is static evergreen content on the page. Once Meridian has been open for a year, "now" will read as stale and confused.  **[RESOLVED - location redesign]** Reworded to "We have two convenient locations to serve you."

30. **"New" badge on Meridian has no expiration logic.** It will read as "New" forever unless manually removed.  **[RESOLVED - location redesign]** Badge removed from the markup and the `.new-location-badge` rule deleted from globals.css.

31. **No hours of operation anywhere on the site** — not in the locations section, not in the footer, not on any page. A patient trying to call or visit has no idea when the office is open.  **[RESOLVED - location redesign]** Hours (Mon to Fri, 8:00am to 4:00pm) now appear on both location pages, on the homepage cards, in the footer, and in the JSON-LD `openingHoursSpecification`.

32. **No "get directions" links on the location cards.** There are addresses but no Google Maps links, Apple Maps links, or driving directions.  **[RESOLVED - location redesign]** Each location page has a "Get Directions" button linking to that office's Google Business Profile.

---

## Insurance Section

33. **The insurance list is dumped in a run-on paragraph** with no bullet list or visual separation: "...so check with your insurance to make sure you will be covered. Blue Cross, Select Health, Pacific Source, Saint Luke's Health Plan..." — the list begins without a colon or line break, tacked onto the end of a sentence mid-thought.

34. **"Cash Pay" is buried at the very end of the insurance list,** after all the named insurers, with no visual distinction. For uninsured patients, this is a critical option that deserves its own callout.

35. **"we can work out of network, but you will have to make the insurance claim yourself"** — the framing is discouraging. It tells the patient upfront they'll have to do extra work with no guidance on how.

36. **"How do I verify coverage?" accordion opens to reveal just a phone number.** No steps, no what-to-expect, no alternative contact method, no estimated wait time for callbacks.

---

## Booking Section

37. **The booking CTA section opens with a 5-sentence paragraph** before you can see the buttons. Users who have scrolled to the bottom of the page to book an appointment are given another wall of text to read first.

38. **"Patient Portal" appears as the PRIMARY booking CTA** both in the hero and in the booking section — but it's a login portal for existing patients. New patients looking to book for the first time will click it, hit a login screen, and be confused.

39. **Outside the hero context, `.btn.secondary` is visually identical to `.btn`** — both render as the same navy blue button because the `.btn.secondary` style only diverges in the hero (glassmorphic). In the booking section, "Patient Portal" and "Appointment Interest Form" look identical. There's no visual distinction between primary and secondary actions.

40. **Two booking pathways (Patient Portal and Interest Form) are presented with no explanation** of which to use. One is for existing patients, one is for new patients — this distinction is never communicated anywhere.

41. **"typically within two weeks of your initial call"** — for a mental health patient, two weeks is an eternity. Leading with the wait time is a bold choice that likely reduces conversion.

42. **After clicking "Appointment Interest Form," users are taken to Google Forms** and upon submission land on Google's confirmation page — leaving the site entirely. No return path, no branded thank-you page.

---

## Our Providers Page

43. **Both "Book Appointment with Talia" and "Book Appointment with Heidi" link to the exact same Google Form URL.** If the form doesn't pre-populate or specify which provider is selected, bookings are functionally ambiguous.

44. **"Join Your Appointment" (telehealth link) only exists for Talia, not Heidi.** This asymmetry is unexplained. Does Heidi not offer telehealth? Is this an oversight? Users have no way to know.

45. **"Privacy Policy" appears as a primary action button in each provider's button group,** co-equal with "Book Appointment." Privacy Policy belongs in the footer. Presenting it as a provider action button is bizarre and creates visual clutter at the most important CTA location on the page.

46. **Nested `content-capsule` inside `provider-info`** — the contact info block is a content capsule nested inside what is already wrapped in a content capsule container. This creates a card-within-a-card visual effect with double shadows and double rounded corners.

47. **"Personalized Care" is listed as one of Talia's specialties** alongside Depression, ADHD, PTSD. "Personalized Care" is a marketing promise, not a clinical specialty. It dilutes the credibility of the actual specialty list.

48. **Psychology Today verification badges have no fallback.** They load via external script. If the script fails (CDN outage, ad blocker, network latency), the badge renders as an invisible empty link element. Users who never see the badge don't know the verification exists.

49. **`data-aos-delay="200"` on Talia's section, `data-aos-delay="100"` on Heidi's section** — Heidi has a shorter delay, meaning she animates in before Talia. This is backwards if Talia is meant to be listed first.

50. **Talia's credentials are inconsistently formatted** — the page shows "Talia Sierra PA-C, DMSc" (no comma before PA-C) while standard medical credential convention is "Talia Sierra, PA-C, DMSc."

51. **"pa-C's"** in the page intro copy — lowercase "pa-C's" is wrong. The credential is "PA-C" (all caps).

52. **"Lets take those next steps together today."** in Heidi's bio — missing apostrophe. Should be "Let's."

53. **The provider photo filename is `talia-mugshot.png`** — "mugshot" is a genuinely bad name for a medical professional's headshot.

---

## Articles Page

54. **"Every month, Awakenings publishes a blog post"** — there are 4 articles total on the site. If monthly, that's 4 months of content. Either the cadence isn't being maintained or the claim is aspirational, not factual.

55. **The Facebook follow CTA appears before the article cards,** interrupting the content flow. Asking users to leave for Facebook before they've seen any articles prioritizes social followers over content engagement.

56. **"Follow us on Facebook for monthly post reminders!"** — directing healthcare patients to Facebook for health content updates is a questionable strategy. Facebook's algorithm doesn't guarantee content delivery, and not all mental health patients use Facebook.

57. **"View Older Articles" expands to show two articles styled as plain blue `.btn` buttons** with the full article title as button text. Using primary CTA button styling for article navigation links is a poor pattern — there's no image, no description, no card layout. Massive inconsistency with the featured article cards above.

58. **PDF download links have `maxWidth: '100px'`** set as inline style. The labels inside ("L-Methylfolate", "Light Therapy") will overflow or truncate inside 100px boxes.

59. **The medical disclaimer** ("None of the information in any of these articles should be considered as medical advice") is a `0.9rem` paragraph in muted text at the very bottom of the page. For a HIPAA-bound healthcare site, the disclaimer is buried and de-emphasized as a design choice.

---

## Article Pages

60. **No article publish dates anywhere.** Health information timeliness matters. Readers can't assess whether content is current. The only date on the entire site is "Last updated: February 2026" on the Privacy Policy.

61. **No author attribution on any articles.** The site prominently markets two providers with distinct philosophies, but articles don't say who wrote them.

62. **No breadcrumb or "back to articles" navigation inside any article.** Once inside an article, the only escape is the main nav. There's no way to return to the articles hub without remembering to click "Articles" in the header.

63. **No "next article" or related articles links** at the end of any article page.

64. **Light therapy article section heading: "How Therapy Works"** — in a context where the practice offers psychotherapy-adjacent services, this heading is ambiguous at best and misleading at worst. It reads as "how psychotherapy works" rather than "how light box therapy works."

65. **Article images use `maxWidth: '60%'` in some places and `maxWidth: '100%'` in others.** Inconsistent inline styling creates uneven reading layouts between articles with no discernible logic behind the size differences.

66. **G.K. Chesterton is misspelled as "Chesterson"** in the exercise/nutrition article — twice. This is a factual error on a published article page.

67. **The Chesterton quote** ("If something is worth doing, it is worth doing badly") is used as both the opening epigraph AND the closing quote in the same article. It appears twice, verbatim, in the same piece.

68. **The screen time article body text has `textAlign: 'center'` applied to the entire content div** — multi-paragraph body copy aligned to center is hard to read at length. This is a significant readability problem for an article meant to be consumed in full.

---

## Footer

69. **Footer uses a different logo image than the header** — the header uses `square-logo-symbol.webp` and the footer uses `rectangle-logo.jpg`. Two different logo assets, different formats (webp vs jpg), different aspect ratios. The brand identity is inconsistent between header and footer.

70. **The footer logo is a `.jpg`** — JPEG compression introduces artifacts on graphics and logos. The header correctly uses `.webp`.

71. **"Questions?"** as the footer contact prompt is a weak CTA. For a mental health practice, this implies the relationship is transactional rather than supportive.

72. **No navigation links in the footer.** Users who reach the bottom of any page have no way to navigate elsewhere without scrolling back to the top. The footer has zero wayfinding.

73. **Footer has no physical addresses** — only email and phone. Both office addresses are on the home page only.

74. **No social media links in the footer** — the articles page promotes a Facebook page, but it's not linked anywhere in persistent navigation or the footer.

---

## Dark Mode

75. **There is no user-controlled dark mode toggle.** Dark mode is 100% system-preference driven. A user who wants to read the site in light mode while their OS is in dark mode (or vice versa) has no option.

76. **In dark mode, footer link buttons switch from orange (`--accent`) to dark slate (`--primary` / `#2F3E46`)** — dark slate buttons on a dark charcoal background (#1D2021) creates low contrast that likely fails WCAG AA.

---

## CSS / Technical Design Debt

77. **`[data-aos]` override at the top of globals.css sets `opacity: 1 !important` and `transform: none !important` on all AOS elements.** This is a visibility fallback that defeats AOS animations site-wide. The `!important` declarations override the AOS library's own inline styles, meaning scroll-triggered fade-in animations may not actually animate — elements just appear immediately.

78. **The CSS file contains a large block labeled "Legacy testimonial styles — kept for backwards compatibility"** including `#testimonials { display: none; }`. Dead code that hides an element via CSS is still in the stylesheet.

79. **`#location h2 { text-align: center; }` is declared twice** in globals.css — exact duplicate rule.

80. **Extensive use of inline `style={{}}` props throughout JSX** — `textAlign`, `paddingTop`, `margin`, `fontSize`, `fontStyle` scattered across every component. Makes the design system impossible to update consistently and creates a maintenance nightmare.

81. **`transition: background .25s, color .25s` is applied directly on `:root`** — transitions on the root element affect all color-related changes across the entire document and can cause flash effects on page load in browsers that determine dark/light mode at render time.

82. **`main.container` has `padding-bottom: 100px` hardcoded** in globals.css. This affects all pages and creates a large empty gap below content on every page — done with a magic number rather than a meaningful spacing unit.

---

## Metadata & SEO

83. **No favicon defined in `layout.js`.** The browser falls back to a default blank page icon. Every tab showing this site has no brand identity.

84. **No Open Graph or Twitter Card meta tags.** Sharing any page on social media or messaging apps produces no preview image, no styled title, no description card.

85. **Home page has no page-specific metadata** — it inherits the generic layout.js defaults. Every other page has specific metadata; the home page does not.

---

## UX Flows

86. **The path from landing to new-patient booking is confused.** Hero: "Patient Portal" (existing patients) → "Meet Our Providers" → scroll past about text, testimonials, locations, insurance → Booking section. There's no clear "new patient? start here" flow.

87. **Both the hero and the bottom booking section have the same two CTAs** — Patient Portal + booking form. The duplication creates uncertainty: is one "better" than the other? Why are they in both places?

88. **The providers page has no "book" CTA above the fold** — users must scroll past the intro paragraph and through the entire first provider bio before encountering a booking button.

89. **No 404 page.** Any mistyped URL or broken internal link will land users on Next.js's default error page with no branding, no navigation, and no path back to the site.
