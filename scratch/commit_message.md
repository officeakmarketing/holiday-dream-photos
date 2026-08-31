feat: UI refinements, updated contact details, and unified card border radii

- **Contact Info:** Updated phone (678-325-1232) and email (Info@holidaydreamphotos.com) in `ContactForm.jsx` and `Footer.jsx`.
- **Form Alignment:** Fixed vertical alignment on the contact form information panel by removing the circular bounding box on the MapPin icon so it perfectly matches the Email and Phone icons.
- **Card Border Radii:** Unified responsive border radii across the design system. Reduced mobile border radii on `HowItWorks`, `SolutionIntro`, `NickCannonSection`, and `Testimonials` to `rounded-xl/2xl`, maintaining `rounded-3xl` on desktop. Reduced `LocationCard` to `rounded-lg md:rounded-xl`.
- **Navigation:** Scaled down the font size of the links inside the full-screen mobile overlay menu for a lighter, cleaner look.
- **Testimonials:** Populated the `Pick Your Santa` page with the verified Marcus T (Traditional) and Keisha (Black Santa) testimonials, replacing the temporary placeholders.
- **Config:** Updated the Next.js `dev` script in `package.json` to bind to `0.0.0.0` to enable local network testing on mobile devices.
