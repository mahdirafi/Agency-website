<div align="center">

# 🚀 Agency Website

A modern, fast, fully responsive agency website built with **React 19**, **Vite**, **Tailwind CSS 4**, **DaisyUI** and **Firebase**.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-13-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#-license)

[Live Demo](https://agency-website-bice-pi.vercel.app/) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📖 About the Project

**Agency Website** is a single-page application that presents an agency's brand, services, pricing and contact options in a clean, professional interface. It is built as a lightweight React + Vite frontend with client-side routing, form handling and Firebase integration, and is fully responsive across mobile, tablet and desktop screens.

> **Live site:** [https://agency-website-bice-pi.vercel.app/](#)

---

## ✨ Features

- ⚡ **Blazing-fast development and builds** powered by Vite
- 📱 **Fully responsive design** for all screen sizes
- 🎨 **Modern UI** using Tailwind CSS 4 utilities and DaisyUI components
- 🧭 **Client-side routing** with React Router 7
- 📝 **Robust form handling and validation** with React Hook Form
- 🔔 **Friendly alerts and confirmations** with SweetAlert2
- 🔥 **Firebase integration** for backend services
- 🧩 **Icon library** via React Icons
- 🧹 **Clean code** enforced by ESLint with React Hooks rules

<!-- Add or remove items so this list matches your real pages, e.g. Home, Services, Pricing, Blogs, Contact, 404 -->

---

## 🛠 Tech Stack

| Category          | Technology                                                                 |
| ----------------- | -------------------------------------------------------------------------- |
| **Framework**     | [React 19](https://react.dev/)                                             |
| **Build Tool**    | [Vite 8](https://vite.dev/)                                                |
| **Styling**       | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`), [DaisyUI 5](https://daisyui.com/) |
| **Routing**       | [React Router 7](https://reactrouter.com/)                                 |
| **Forms**         | [React Hook Form](https://react-hook-form.com/)                            |
| **Backend / BaaS**| [Firebase](https://firebase.google.com/)                                   |
| **UI Feedback**   | [SweetAlert2](https://sweetalert2.github.io/)                              |
| **Icons**         | [React Icons](https://react-icons.github.io/react-icons/)                  |
| **Linting**       | [ESLint](https://eslint.org/) + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` |

---

## 🖼 Screenshots

<!-- Replace with real screenshots, e.g. put images in /public/screenshots -->

| Home | Services |
| ---- | -------- |
| ![Home](![alt text](image.png)) | ![Services](![alt text](image-1.png)) |

---

## 🚦 Getting Started

### Prerequisites

- **Node.js** `v20.19+` (required by recent Vite versions)
- **npm** (comes with Node.js)
- A **Firebase project** (see [Environment Variables](#-environment-variables))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mahdirafi/Agency-website.git
   cd Agency-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Then fill in your Firebase credentials (see below).

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 Environment Variables

Create a `.env` file in the project root. Vite only exposes variables that start with `VITE_`.

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> ⚠️ Make sure the variable names match what your Firebase config file reads (for example `import.meta.env.VITE_FIREBASE_API_KEY`). Never commit your real `.env` file. Add it to `.gitignore` and commit a `.env.example` with placeholder values instead.

You can find these values in the **Firebase Console → Project settings → Your apps → SDK setup and configuration**.

---

## 📜 Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Starts the Vite development server with HMR      |
| `npm run build`   | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing  |
| `npm run lint`    | Runs ESLint across the project                   |

---

## 📁 Project Structure

<!-- Replace with your real structure. Generate it with: tree -L 2 -I node_modules -->

```
Agency-website/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components (Navbar, Footer, ...)
│   ├── pages/           # Route pages
│   ├── routes/          # Router configuration
│   ├── firebase/        # Firebase configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind + DaisyUI setup
├── .env.example
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🌐 Deployment

Build the project:

```bash
npm run build
```

The production files are generated in the `dist/` folder. You can deploy them to any static host:

- **Vercel** or **Netlify**: import the repo, set the build command to `npm run build` and the output directory to `dist`, then add your `VITE_FIREBASE_*` environment variables in the dashboard.
- **Firebase Hosting**: run `firebase init hosting`, set the public directory to `dist`, configure it as a single-page app, then run `firebase deploy`.

> 💡 Because the app uses client-side routing, configure your host to redirect all routes to `index.html` (for example a `vercel.json` rewrite or a Netlify `_redirects` file) so refreshing a nested route doesn't return a 404.

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please run `npm run lint` before submitting a PR.

---

## 📄 License

Distributed under the **MIT License**. See the `LICENSE` file for details.

---

## 📬 Contact

**MD Mahdi**

- GitHub: [@mahdirafi](https://github.com/mahdirafi)
- Project Link: [https://github.com/mahdirafi/Agency-website](https://github.com/mahdirafi/Agency-website)

---

<div align="center">

⭐ If you found this project helpful, please give it a star!

</div>