# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Copy code
# Heritage City Restaurant 

Welcome to the my-foodweb project! This project represents a website for a restaurant named "Heritage City," showcasing its various sections such as Home, Menu, About, and Customer Reviews.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Navbar:** Responsive navigation bar with smooth scrolling to different sections.
- **Home:** A visually appealing home section introducing Heritage City with a call-to-action button.
- **Menu:** Displays modern twists on timeless classics with images and titles.
- **About:** Describes the unique experience offered by Heritage City, including an enticing image.
- **Reviews:** Presents customer reviews through ReviewCard components with images and names.
- **Footer:** Provides business information, links, and contact details.

## Getting Started
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-foodweb
Install dependencies:

bash
Copy code - npm install 


2. Setting up Tailwind CSS

Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

 - Terminal

npm create vite@latest my-project -- --template react
cd my-foodweb
Install Tailwind CSS
Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

 - Terminal

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

 - tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

 - index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
Start your build process
Run your build process with npm run dev.

 - Terminal

npm run dev
Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content.

 - App.jsx

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

bash
Copy code - npm start
Open your browser and visit http://localhost:3000 to view the application.

Technologies Used
React
Tailwind CSS
React Icons
React Scroll
Folder Structure
src/: Contains the source code for the React components and assets.
assets/: Holds image assets and other resources.
components/: Contains React components (Navbar, Home, Dishes, About, Review, Footer, etc.).
layouts/: Includes reusable layout components (Button, ReviewCard, DishesCard, etc.).
Contributing
Contributions are welcome! Feel free to open issues or pull requests to improve the project.

These instructions assume that you have Node.js and npm installed on your machine. If you don't have them installed, you can download and install them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/).
