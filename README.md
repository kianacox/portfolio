# Kiana Cox - Portfolio

A modern, responsive portfolio website built with Next.js showcasing professional experience, skills, and projects.

## Project Overview

The application uses a modern React-based architecture with TypeScript for type safety and SCSS for styling. It includes performance monitoring with Vercel Analytics and Speed Insights.

## Tech Stack

### Frontend

- **Next.js 15.3.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **SCSS/Sass** - Advanced CSS preprocessing

### Styling & UI

- **CSS Modules** - Scoped styling
- **Google Fonts** - Typography (Geist, Orbitron, VT323)
- **React Icons** - Icon library

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Jest** - Testing framework
- **Testing Library** - React component testing

### Performance & Analytics

- **Vercel Analytics** - Website analytics
- **Vercel Speed Insights** - Performance monitoring

### Deployment

- **Vercel** - Hosting platform

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

### Testing

The project includes comprehensive testing setup with Jest and Testing Library:

```bash
npm run test
```

### Code Quality

The project uses ESLint and Prettier for code quality:

```bash
npm run lint
npm run format
```

## Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── constants/          # Color system and constants
│   │   ├── colors.ts       # Color palette definitions
│   │   └── README.md       # Color system documentation
│   └── app/
│       ├── components/     # React components
│       │   ├── Content/    # Main content wrapper with tab navigation
│       │   ├── Profile/    # Profile section with skills
│       │   ├── Timeline/   # Employment history timeline
│       │   ├── Projects/   # Personal projects showcase
│       │   ├── Headline/   # Animated header components
│       │   └── LandingOverlay/ # Welcome screen
│       ├── layout.tsx      # Root layout with fonts
│       ├── page.tsx        # Home page with routing
│       ├── globals.css     # Global styles and CSS variables
│       └── page.module.css # Page-specific styles
├── package.json
└── README.md
```

## Deployment

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Sass Documentation](https://sass-lang.com/documentation)
