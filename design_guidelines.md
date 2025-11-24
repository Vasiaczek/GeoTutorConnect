# Geography Tutoring Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional service platforms like Calendly, Coursera, and modern tutoring platforms. Focus on trust-building, clarity, and approachable professionalism.

## Core Design Principles
1. **Credibility First**: Clean, professional aesthetic that builds confidence in tutoring expertise
2. **Clear Hierarchy**: Guide users naturally from awareness → services → conversion
3. **Approachable Excellence**: Professional without being intimidating or overly corporate

---

## Typography System

**Primary Font**: Inter or DM Sans (Google Fonts)
**Secondary Font**: Same family for consistency

**Hierarchy**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- Section Titles: text-4xl md:text-5xl, font-bold
- Service Card Titles: text-2xl md:text-3xl, font-semibold
- Body Text: text-lg, font-normal, leading-relaxed
- Navigation: text-base, font-medium
- Button Text: text-base md:text-lg, font-semibold

---

## Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-6xl

**Grid Strategy**:
- Hero: 2-column grid (text left, image right) - `grid-cols-1 lg:grid-cols-2 gap-12`
- Services: 3-column grid - `grid-cols-1 md:grid-cols-3 gap-8`
- Consultation: 2-column grid (image left, text right) - `grid-cols-1 lg:grid-cols-2 gap-12`
- Contact Form: Single column centered, max-w-2xl

---

## Component Library

### Navigation Bar
- Fixed position with backdrop blur (sticky top-0 backdrop-blur-md)
- Logo: h-8 to h-10, clickable home link
- Menu items: Horizontal flex layout, gap-8, hover underline animation
- Container: max-w-7xl, px-6, py-4

### Hero Section
- Full viewport height consideration: min-h-screen with flex items-center
- Left Column: Headline, 2-3 paragraph explanatory text (max-w-xl), "Learn More" CTA button
- Right Column: Large hero image with rounded corners (rounded-2xl), subtle shadow
- Button: Prominent primary style, px-8 py-4

### My Services Section
- Section title centered above cards: "My Services"
- Three service cards with equal width, rounded-xl borders
- Each card: Icon/graphic at top, service title, description text (4-5 lines), pricing/details
- Cards: p-8, hover effect with subtle lift (transform scale)
- Spacing between cards: gap-8

### Free Consultation Section
- Two-column layout matching hero proportions
- Left: Image with rounded-2xl, professional tutoring scene
- Right: Compelling headline, benefits list (3-4 bullet points), prominent CTA button
- Background: Subtle gradient or light background treatment

### About Section
- Single column centered content, max-w-4xl
- Professional headshot image: rounded-full, w-32 h-32, centered or left-aligned
- Biography text: 2-3 paragraphs, credentials, teaching philosophy
- Optional: Experience timeline or credential badges

### Contact Form
- Centered layout, max-w-2xl
- Form fields: Full name, Email, Subject, Message (textarea)
- Field styling: p-4, rounded-lg, border, focus ring
- Submit button: Full width or prominent centered
- Confirmation message area below form

---

## Images Section

**Hero Image** (Right side of landing):
- Large professional image of geography materials, maps, globe, or tutoring session
- Dimensions: Minimum 800x600px, landscape orientation
- Treatment: Rounded corners (rounded-2xl), subtle shadow

**Consultation Section Image** (Left side):
- Image of engaging tutoring session, student learning, or friendly tutor portrait
- Dimensions: 600x600px, square or slight portrait orientation
- Treatment: Rounded corners (rounded-xl)

**About Section Image**:
- Professional headshot of the tutor
- Dimensions: 300x300px, square
- Treatment: Rounded-full for circular presentation

**Service Cards** (Optional):
- Small icons or illustrations representing each service type
- Can use icon library (Heroicons) or simple geometric shapes

---

## Navigation & Interactions

**Smooth Scrolling**: Implement smooth scroll behavior for navigation links to sections
**Scroll Anchors**: Each major section (Services, Consultation, About, Contact) needs proper ID anchors
**Active States**: Navigation items highlight when corresponding section is in viewport
**Button States**: All buttons have distinct hover states (slight scale or brightness change)

---

## Form Specifications

**Contact Form Fields**:
1. Name (required, text input)
2. Email (required, email input with validation)
3. Subject (optional, text input)
4. Message (required, textarea, min 3 rows)
5. Submit button: "Send Message" or "Get In Touch"

**Validation**: Client-side validation with clear error states, helpful error messages

---

## Accessibility Considerations

- All interactive elements have focus states (ring-2 ring-offset-2)
- Form labels properly associated with inputs
- Semantic HTML structure (nav, main, section, footer)
- Sufficient color contrast for all text
- Alt text for all images describing context

---

**Overall Aesthetic**: Clean, modern, professional with warmth. Use ample whitespace, clear visual hierarchy, and maintain consistent spacing throughout. The design should feel trustworthy and approachable while showcasing expertise in geography education.