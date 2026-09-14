# Prompt Documentation

This project was developed using four structured prompts. Each prompt focused on a specific stage of development, starting with the initial implementation of the website and progressing through data integration, functionality, and final refinement.

---

# Prompt 1 — Initial Website Implementation

Create a Next.js website that recreates the provided reference design as closely as possible.

Requirements:

- Use Next.js with TypeScript.
- Use React components and Tailwind CSS for styling.
- Recreate the overall layout, spacing, typography, colors, cards, buttons, navigation, and responsive behavior shown in the reference.
- Create the main page structure and all major sections visible in the reference.
- Break the UI into reusable components wherever appropriate.
- Use static/placeholder data where required during the initial implementation.
- Make the website responsive for desktop and mobile screen sizes.
- Keep the implementation clean, organized, and maintainable.
- Follow Next.js and React best practices.
- Use the existing project structure where applicable.

The primary goal of this prompt is to create the complete visual structure and initial UI of the website based on the provided reference.

---

# Prompt 2 — Add Listing Data and Images

Now populate the website with realistic listing data and images while keeping the existing design unchanged.

Create and use a structured data file for the listing information so that the UI components can consume the data easily.

Include the following information:

- Listing title
- Location
- Number of guests
- Number of bedrooms
- Number of beds
- Number of bathrooms
- Rating
- Number of reviews
- Price
- Number of nights
- Check-in and check-out dates
- Cancellation information
- Amenities
- Host/co-host information
- Reviews
- Nearby/recommended listings
- Review mention tags

Organize the data in a dedicated data file and make the UI render the information from this data instead of unnecessarily hardcoding the same information inside individual components.

For images, use externally hosted image URLs instead of storing image files locally in the project. Organize the image URLs in the data file and reference them from the relevant components.

Make sure all existing sections correctly display the newly added data.

Do not unnecessarily change the existing visual design, layout, spacing, typography, or responsiveness.

---

# Prompt 3 — Add Interactions and Functionality

Now improve the existing website by adding the required user interactions and functionality while preserving the current visual design.

Implement the interactions visible or expected from the reference website.

Add functionality such as:

- Interactive buttons and controls
- Image gallery interactions
- Guest selection
- Check-in and check-out date interactions
- Reservation/booking-related UI interactions
- Expand/collapse functionality where appropriate
- Review interactions
- Responsive mobile navigation and controls
- Interactive listing and booking elements
- Any other interactions required by the existing UI

Use React state, event handlers, and components where necessary.

Ensure that interactive elements provide appropriate visual feedback and behave correctly.

Do not unnecessarily change the existing visual design. Preserve:

- Layout
- Styling
- Spacing
- Typography
- Colors
- Component structure
- Responsive behavior

The primary goal of this prompt is to transform the initial static interface into an interactive website while maintaining the reference design.

---

# Prompt 4 — Final Refinement, Testing and Deployment Readiness

Perform a final review and refinement of the entire Next.js website.

Review the complete application and check for:

- Visual consistency with the reference design
- Responsive behavior on desktop, tablet, and mobile
- Correct spacing, sizing, typography, and alignment
- Working buttons and interactions
- Correct rendering of all listing data
- Correct image loading and sizing
- Component structure and code organization
- TypeScript errors
- Unnecessary or duplicated code
- UI inconsistencies
- Build and deployment issues

Fix any issues found without changing the intended design.

Ensure that:

- The project builds successfully using `npm run build`.
- All required source files are included in the repository.
- The `data` folder containing the application's listing data is included in the repository.
- Generated files such as `.next` and `node_modules` are not committed.
- Environment variables and secrets are not committed.
- The project is ready to be deployed on Vercel.
- The application works correctly after deployment.
- The code remains clean, organized, and maintainable.

Keep the final implementation consistent with the original reference design while ensuring that the application is stable and deployment-ready.

---

# Development Flow

The four prompts were used in the following development sequence:

### 1. Initial Implementation
The first prompt established the overall Next.js application structure and recreated the reference website's UI.

### 2. Data and Images
The second prompt added structured listing information, reviews, amenities, nearby listings, and externally hosted image URLs.

### 3. Functionality
The third prompt added the required interactions and dynamic behavior using React state and event handling.

### 4. Final Refinement
The fourth prompt focused on testing, responsive behavior, code cleanup, fixing issues, and preparing the application for Vercel deployment.

---

# Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git
- GitHub
- Vercel

---

# Project Structure

The main project structure is organized around the following:

```text
project/
├── app/
├── components/
├── data/
│   └── listing.ts
├── .gitignore
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json