# Iván Shifman | Full Stack Web Developer Portfolio

This is the official portfolio of **Iván Shifman**, a Full Stack Web Developer with experience in **frontend** and **backend** development. The portfolio showcases projects, skills, professional experience, and provides a way to contact Iván directly. The website supports **dynamic language switching** (Spanish/English), **dark mode**, and smooth **animations**.

---

## 📂 Project Structure

### CSS
- `global.css` – General styles and layout.
- `header.css` – Header and navigation styles.
- `main.css` – Core page structure.
- `home.css` – Homepage specific styles.
- `skills.css` – Skills section styling.
- `education.css` – Education timeline styles.
- `experience.css` – Experience timeline styles.
- `project.css` – Projects section styling.
- `contact.css` – Contact form styling.
- `footer.css` – Footer styles.
- `animations.css` – Smooth animations for page elements.
- `darkmode.css` – Dark mode styles.
- `language.css` – Language toggle styling.

### JavaScript
- `main.js` – Entry point, initializes language, dark mode, animations, and project filtering.
- `darkmode.js` – Dark mode toggle functionality.
- `dataLoader.js` – Loads JSON data dynamically.
- `translation.js` – Handles language translation and dynamic text updates.
- `navigation.js` – Navbar link setup and filter button interactions.
- `photoFlip.js` – Profile photo flip effect.
- `visibility.js` – Scroll-based visibility and animations.
- `projects.js` – Project filtering and rendering.
- `skillsRenderer.js` – Renders skills icons dynamically.
- `year.js` – Updates the current year in the footer.
- `education.js`, `experience.js` – Handles timelines.
- `form.js` – Contact form submission logic.
- `utils.js` – Utility functions.

### Data
- `education.json`, `experiences.json`, `projects.json`, `skillsData.json` – Content for education, experience, projects, and skills.
- `translation.json` – Language translations for Spanish (`es`) and English (`en`).

### Server (Backend)
- `server/src/server.js` – Express server setup.
- `controllers/contactController.js` – Handles contact form submissions.
- `routes/contactRoutes.js` – API routes for contact form.
- `templates/emailTemplates.js` – Email templates for contact form notifications.
- `validators/contactValidator.js` – Input validation using Joi.
- **Dependencies:** `express`, `cors`, `dotenv`, `nodemailer`, `joi`.
- **Dev Dependencies:** `nodemon`.

---

## 🌐 Features

- **Multilingual Support:** Switch between **Spanish** and **English** dynamically.
- **Dark Mode:** Toggle dark mode for comfortable viewing.
- **Project Filtering:** Filter projects by categories: frontend, backend, fullstack, e-commerce, desktop.
- **Dynamic Timelines:** Education and experience rendered from JSON data.
- **Responsive Design:** Fully responsive layout for mobile and desktop.
- **Animated Interactions:** Smooth animations and scroll-based element visibility.
- **Contact Form:** Validated contact form with email sending via **Nodemailer**.
- **SEO & Meta Tags:** Dynamic meta tags with Open Graph support for better SEO.
- **Current Year Update:** Footer year is updated dynamically.

---

## 🚀 Getting Started

### Frontend

1. Open `index.html` in your browser.
2. Use the toggle in the header to switch languages.
3. Enable dark mode via the dark mode switch.
4. Explore sections: Skills, Education, Experience, Projects, Contact.

### Backend

1. Navigate to `server` folder.
2. Install dependencies:
   ```bash
   npm install
3. Start server in development mode:
  npm run dev
4. Start server in production mode:
  npm start

## 🔧 Technologies

- Frontend: HTML5, CSS3, JavaScript (ES6 Modules), responsive design.

- Backend: Node.js, Express.js.

- Email: Nodemailer for sending form submissions.

- Validation: Joi for server-side validation.

## 📫 Contact

**Email:** [ivanshifman1300@gmail.com](mailto:ivanshifman1300@gmail.com)  

**GitHub:** [https://github.com/ivanshifman](https://github.com/ivanshifman)  

**LinkedIn:** [https://www.linkedin.com/in/iván-ezequiel-shifman-042b0726a](https://www.linkedin.com/in/iván-ezequiel-shifman-042b0726a)
