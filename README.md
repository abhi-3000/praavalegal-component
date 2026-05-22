# Praava Legal - Animated Hero Section

A highly polished, production-quality landing page hero section built for a legal services platform. This project features a split-layout design, dark mode support, and complex, dynamic floating card animations.

# Deployment Link: https://praavalegal-component.vercel.app/

## Features

- **Pixel-Perfect Responsive Design**: Looks stunning on both desktop and mobile devices. Elements stack gracefully on smaller screens.
- **Dynamic Animations**: Built with **Framer Motion**, featuring staggered fade-ins, independent hover interactions, and subtle ambient floating effects (achieved via modern CSS translate properties).
- **Dark Mode Ready**: Fully integrated with `next-themes`, ensuring the platform remains beautiful and accessible in both light and dark modes.
- **Modern Tech Stack**: Utilizes the latest standards, including Next.js App Router and Tailwind CSS v4.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion & CSS Keyframes
- **Icons**: Lucide React
- **Theming**: next-themes

---

## Getting Started

Follow these steps to run the project locally on your machine.

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system (v18 or higher is recommended).

### 2. Clone the Repository

Open your terminal and clone this project to your local machine:

```bash
git clone https://github.com/abhi-3000/praavalegal-component.git
```

### 3. Navigate into the Directory

```bash
cd praavalegal-component
```

### 4. Install Dependencies

Install all the required packages (Framer Motion, Tailwind, etc.):

```bash
npm install
```

### 5. Run the Development Server

Start the local server to see the project in action:

```bash
npm run dev
```

### 6. View in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

- `app/page.js` - The main Hero component containing the layout and animation logic.
- `app/globals.css` - Global stylesheet containing Tailwind configurations and custom floating keyframe animations.
- `components/ThemeToggle.jsx` - Custom light/dark mode switcher component.
- `components/theme-provider.jsx` - Next-themes provider wrapper for the application.
