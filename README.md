Phonebook App Version 1 (React + Vite)

A simple phonebook application built with React and Vite. You can add contacts with validation, filter them by name, and
delete entries. Contacts persist between sessions using localStorage.

This repository was bootstrapped with Vite's React template and customized for the GoIT homework assignment.

## Overview

- Add a contact (name and 7-digit phone number) using a validated form powered by Formik and Yup.
- Auto-formats numbers as XXX-XX-XX on submit.
- Prevents duplicate names (case-insensitive check against initial list).
- Filter contacts by name in real time; only letters and spaces are allowed.
- Delete contacts from the list.
- Contacts are stored in localStorage so they persist across page reloads.

## Tech Stack

- Language: JavaScript (ES Modules)
- Framework: React 19
- Build Tool/Dev Server: Vite 7
- Linting: ESLint 9 (with react-hooks and react-refresh plugins)
- Form handling & validation: Formik 2, Yup 1
- IDs: nanoid 5
- Icons: react-icons 5

## Project Entry Points

- index.html — root HTML with mounting node `#root` and script to `/src/main.jsx`.
- src/main.jsx — React bootstrap (StrictMode + createRoot) and global CSS import.
- src/App.jsx — Application root component (state management, localStorage sync, handlers).

## Requirements

- Node.js >= 18 (LTS recommended). ESLint 9 and Vite 7 require a modern Node runtime.
- npm (this repo uses npm; package-lock.json is present).

## Getting Started

1. Install dependencies:
    - npm install
2. Start the development server:
    - npm run dev
    - Vite will print the local URL (typically http://localhost:5173).
3. Build for production:
    - npm run build
4. Preview the production build locally:
    - npm run preview
5. Lint the project:
    - npm run lint

## Available Scripts

- npm run dev — Start Vite dev server with HMR.
- npm run build — Build the app to dist/.
- npm run preview — Preview the production build locally.
- npm run lint — Run ESLint on the project.

## Environment Variables

No environment variables are currently used by the application.

- TODO: If you later introduce API keys or environment-specific settings, document them here and in an `.env` example
  file (e.g., `.env.example`). With Vite, client-exposed vars must be prefixed with `VITE_` (e.g., `VITE_API_URL`).

## Tests

No test setup is included at the moment.

- TODO: Add tests (e.g., with Vitest and React Testing Library).
    - Install: `npm i -D vitest @testing-library/react @testing-library/jest-dom jsdom`
    - Example scripts to add into package.json:
        - `"test": "vitest"`, `"test:ui": "vitest --ui"`, `"test:coverage": "vitest run --coverage"`

## Project Structure

```
.
├─ index.html                  # App HTML entry (mounts #root, loads src/main.jsx)
├─ package.json                # npm scripts and dependencies
├─ vite.config.js              # Vite config with @vitejs/plugin-react
├─ eslint.config.js            # ESLint 9 config for JS/React
├─ public/                     # Static assets (served as-is by Vite)
├─ src/
│  ├─ main.jsx                 # React bootstrap, imports ./index.css and App
│  ├─ App.jsx                  # App state, handlers, localStorage sync
│  ├─ App.css                  # App-level styles (if present)
│  ├─ index.css                # Global styles
│  └─ components/
│     ├─ contact/Contact.jsx   # Initial contacts seed array (default export)
│     ├─ contactList/          # ContactList component + styles
│     │  ├─ ContactList.jsx
│     │  └─ ContactList.module.css
│     └─ contactform/          # ContactForm with Formik + Yup validations
│        ├─ ContactForm.jsx
│        └─ ContactForm.module.css
└─ README.md                   # You are here
```

## How It Works (Brief)

- Initial contacts come from `src/components/contact/Contact.jsx`.
- On first load, the app reads contacts from localStorage (key: `contacts`) if present; otherwise uses the initial list.
- Add Contact: Validates name and 7-digit number, normalizes formatting and capitalization, then saves with a
  nanoid-based `id-XXX`.
- Filter: Case-insensitive prefix match on name; input restricts to letters and spaces.
- Delete: Removes the selected contact by id.
- Persistence: Any change to contacts updates localStorage automatically via `useEffect`.

## Browser Support

- Modern evergreen browsers. Vite targets modern ES modules builds.

## License

- TODO: Add a LICENSE file (e.g., MIT) and specify the license here.

## Acknowledgements

- Bootstrapped with Vite and @vitejs/plugin-react.
- Form validation by Formik and Yup.
- Icons via react-icons.
