# Zenlit Web Gemini

A modern, responsive website redesign for Zenlit, built with React, TypeScript, Vite, and Tailwind CSS. This project features smooth animations using Framer Motion and a clean, mobile-first design.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/wesluo/Zenlit-Web-Gemini.git
    cd Zenlit-Web-Gemini
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## 🛠️ Development

Start the development server with hot reload:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

## 📦 Building for Production

Build the project for production (outputs to `dist/` folder):

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

*Note: For an alternative method to serve the `dist` folder using Python, see [SERVER_GUIDE.md](./SERVER_GUIDE.md).*

## ☁️ Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel.

1.  Install Vercel CLI:
    ```bash
    npm i -g vercel
    ```

2.  Deploy:
    ```bash
    vercel
    ```

3.  Deploy to Production:
    ```bash
    vercel --prod
    ```

## 📂 Project Structure

```
src/
├── components/   # Reusable UI components (Hero, Navbar, Footer, etc.)
├── data/         # Static data files (e.g., blog posts)
├── pages/        # Route components (Home, BlogPost)
├── App.tsx       # Main application component
└── main.tsx      # Entry point
public/
└── assets/       # Static images and media
```

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📄 License

[MIT](LICENSE)
