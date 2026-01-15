# AgriTech Insight

A peer-reviewed digital e-magazine dedicated to advancing knowledge in agriculture, agri-technology, environmental sustainability, and rural innovation.

## Project Overview

AgriTech Insight provides a global platform for scientists, academicians, industry experts, and practitioners to share cutting-edge research, innovations, and policy insights.

## Technologies Used

This project is built with:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd "Agriculture Magzine"
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/     # Reusable React components
│   ├── layout/    # Layout components (Header, Footer, Layout)
│   └── ui/         # UI components (buttons, cards, etc.)
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and data
└── assets/         # Static assets (images, etc.)
```

## Features

- **Home Page** - Hero section, quick links, and magazine overview
- **About Page** - Vision, mission, purpose, and focus areas
- **Current Issue** - Display current volume and articles
- **Archives** - Browse past issues
- **Editorial Board** - Meet the editorial team
- **Submission** - Author guidelines and article submission
- **Contact** - Contact information and form

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service.

## License

© 2026 AgriTech Insight. All rights reserved.
