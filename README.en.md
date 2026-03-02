[🇷🇺 Читать на русском](README.md)
# Mock Registration Page (React + Vite)

[![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646cff.svg)](https://vitejs.dev/)

---

## Description

Mock registration and login page with modern UI, dark theme support, and form validation. The project demonstrates form handling, component state management, and responsive design.

---

## Features

| Feature | Description |
|---------|-------------|
| **Login/Register** | Toggle between modes |
| **Form Validation** | Email and password checks |
| **Dark Theme** | Toggle with `localStorage` persistence |
| **Password Visibility** | show/hide toggle button |
| **Loading State** | Animation on form submit |
| **Responsive** | Mobile-friendly design |

---

## Project Structure

```
main/
├── src/
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   └── pages/
│       ├── LoginPage.jsx       # Page component
│       └── LoginPage.css       # Page styles
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.en.md
```

---

## Installation & Usage

### 1. Install Dependencies

```bash
cd React-JS-SigninMock-main
npm install
```

### 2. Run

```bash
# Development mode
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Linting
npm run lint
```

### 3. Run Without npm

```bash
npx vite
```

---

## Technologies

- **React 19** — `useState`, `useEffect` hooks
- **Vite** — Bundler
- **CSS Variables** — Theming
- **CSS Animations** — `slideUp`, `fadeIn`, loading spinner

---

## Notes

- Theme persists in `localStorage`
- Password min. **6 characters**
- Mock mode (no backend)

---
