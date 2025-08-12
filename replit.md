# Muhammad Zahid Portfolio Website

## Overview
This is a modern portfolio website for Muhammad Zahid, a web developer showcasing his skills, projects, services, and professional experience. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a clean, professional design with comprehensive sections including projects, skills, testimonials, blog, and contact information. The site includes placeholder ad spaces throughout the layout and implements a responsive design pattern suitable for professional portfolio presentation.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React 18 with TypeScript and follows a component-based architecture:
- **UI Framework**: React with TypeScript for type safety and better development experience
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular components with reusable UI elements following shadcn/ui patterns

The application uses a traditional SPA (Single Page Application) structure with multiple pages including Home, Projects, About, Services, Skills, Blog, Testimonials, and Contact sections.

### Backend Architecture
The backend follows a minimal Express.js setup:
- **Framework**: Express.js with TypeScript
- **Architecture Pattern**: RESTful API design with route-based organization
- **Storage Interface**: Abstract storage interface allowing for pluggable data persistence
- **Current Implementation**: In-memory storage for development (MemStorage class)
- **Session Management**: Express sessions with PostgreSQL session store integration ready
- **Development Setup**: Hot reload with tsx for rapid development

### Database Design
The application is configured for PostgreSQL with Drizzle ORM:
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: User management schema with basic authentication fields
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Connection**: Configured for Neon Database serverless PostgreSQL

### Styling and Design System
The project implements a comprehensive design system:
- **CSS Framework**: Tailwind CSS with custom configuration
- **Component Library**: shadcn/ui for consistent UI components
- **Theme System**: Light/dark mode support with CSS custom properties
- **Typography**: Inter font family with fallbacks
- **Color Scheme**: Professional blue and neutral color palette
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Development Workflow
The architecture supports modern development practices:
- **Hot Module Replacement**: Vite HMR for instant development feedback
- **TypeScript**: Full type safety across frontend and backend
- **Path Mapping**: Convenient import aliases for cleaner code organization
- **Build Process**: Optimized production builds with code splitting

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React integration for Vite build system
- **express**: Node.js web framework for backend API
- **react & react-dom**: Core React library and DOM bindings
- **typescript**: TypeScript compiler for type safety

### Database and ORM
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-kit**: CLI tool for database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **@radix-ui/**: Complete set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx & tailwind-merge**: Conditional className utilities

### State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form & @hookform/resolvers**: Form handling and validation

### Routing and Navigation
- **wouter**: Lightweight router for React applications

### Development Tools
- **tsx**: TypeScript execution environment for development
- **vite**: Build tool and development server
- **@replit/vite-plugin-runtime-error-modal**: Development error handling for Replit environment

### Icons and Assets
- **lucide-react**: Icon library with React components
- **react-icons**: Additional icon sets including brand icons

### Validation and Utilities
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation
- **date-fns**: Date manipulation utility library
- **nanoid**: URL-safe unique string ID generator

### Additional UI Components
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **input-otp**: OTP input component
- **react-day-picker**: Date picker component
- **vaul**: Drawer component for mobile interfaces