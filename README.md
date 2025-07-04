# Task Management Application

A modern, responsive task management application built with Next.js 15, featuring real-time updates, advanced filtering, and a beautiful user interface with smooth animations.

## 🌐 Live Demo

**🔗 [View Live Demo](https://builtbypixel-code-test.vercel.app)**

Experience the application with real data and see all features in action!

## 🚀 Features

- **Task Management**: View, filter, and sort tasks by status
- **Real-time Updates**: Live data synchronization with GraphQL
- **Advanced Filtering**: Filter tasks by status (New, Offer Accepted, Completed)
- **Alphabetical Sorting**: Client-side alphabetical sorting with interactive toggle (A-Z / Z-A)
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Mode Support**: Seamless light/dark theme switching
- **Smooth Animations**: Framer Motion powered interactions
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **Type Safety**: Full TypeScript support with generated GraphQL types
- **Analytics**: Vercel Analytics integration for performance monitoring
- **Accessibility**: WCAG 2.1 AA compliant with comprehensive ARIA labels


## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Data Fetching**: Apollo Client with GraphQL
- **Runtime**: Bun (recommended) / Node.js
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd builtbypixel-code-test
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your GraphQL endpoint and any other required environment variables.

4. **Generate GraphQL types**
   ```bash
   bun run codegen
   ```

## 🚀 Running the Application

### Development Mode
```bash
# Using Bun (recommended)
bun dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build
```bash
# Build the application
bun run build

# Start the production server
bun start
```

## 📁 Project Structure

```
app/
├── layout.tsx                # Root layout with theme provider and analytics
├── page.tsx                  # Home page with project overview
├── favicon.ico              # Application favicon
└── tasks/                   # Task management feature
    ├── layout.tsx           # Tasks layout with sidebar and mobile drawer
    ├── page.tsx             # Main tasks page
    ├── [status]/            # Dynamic status routes
    │   └── page.tsx         # Status-specific task pages
    ├── components/          # Task-specific components
    │   ├── tasks.card.tsx   # Individual task card component
    │   ├── tasks.list.tsx   # Task list with pagination and sorting
    │   ├── tasks.filter.tsx # Status filter component
    │   ├── tasks.header.tsx # Header with logo and mobile filter
    │   ├── tasks.sidebar.tsx # Desktop sidebar component
    │   ├── task.loading.tsx # Skeleton loading component
    │   ├── task.error.tsx   # Error state component
    │   ├── task.empty.tsx   # Empty state component
    │   └── index.ts         # Component exports
    ├── graphql/             # GraphQL operations
    │   ├── tasks.query.ts   # Task list and total queries
    │   ├── TaskList.gql     # Task list GraphQL query
    │   └── GetTotalTask.gql # Total task count query
    ├── hooks/               # Custom React hooks
    │   └── useTasks.ts      # Task management hook
    └── utils/               # Task utility functions
        ├── tasks.helpers.ts # Task helper functions
        ├── tasks.constraint.ts # Task constraints
        └── index.ts         # Utility exports

components/                  # Shared UI components
├── ui/                     # shadcn/ui components
├── logo.tsx                # Logo component with hydration fix
├── theme-toggle.tsx        # Theme toggle with hydration fix
└── theme-provider.tsx      # Theme context provider

utils/                      # Global utilities
├── cn.ts                   # Class name utility
└── apolloClient.ts         # Apollo GraphQL client

types/                      # TypeScript type definitions
└── graphql.d.ts           # GraphQL type declarations
```

## 🎨 Key Components

### Task Management Components
- **TaskList**: Main task display with pagination, sorting, and motion animations
- **TaskCard**: Individual task cards with hover effects and accessibility features
- **TaskFilter**: Status-based filtering with mobile drawer support
- **TaskHeader**: Header component with logo, theme toggle, and mobile filter button
- **TaskSidebar**: Desktop sidebar with filter component and responsive design

### State Components
- **TaskLoading**: Skeleton loading states with motion animations and pulse effects
- **TaskError**: Error state component with ARIA roles and retry functionality
- **TaskEmpty**: Empty state component with helpful suggestions and accessibility

### UI Components
- **ThemeToggle**: Theme switching component with hydration fix
- **Logo**: Application logo with hydration-safe rendering
- **ThemeProvider**: Context provider for theme management

### Utility Components
- **Pagination**: Page navigation with accessibility support
- **Badge**: Status indicators for task states
- **Button**: Reusable button components with variants
- **Alert**: Notification and status message components

## 🔧 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun codegen` - Generate GraphQL types

## 🌟 Features in Detail

### Task Filtering & Sorting
- **Status Filtering**: Filter by status: New, Offer Accepted, Completed
- **URL-based Filtering**: Dynamic routes with persistent filter state
- **Client-side Sorting**: Sort tasks alphabetically by title (A-Z / Z-A)
- **Interactive Sort Toggle**: Click sort button to switch between ascending and descending order
- **Real-time Sorting**: Instant feedback with smooth animations and visual indicators
- **Accessible Sorting**: ARIA labels and keyboard navigation support for sort controls

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

### Performance Optimizations
- Server-side rendering with Next.js
- Optimized GraphQL queries
- Efficient state management
- Smooth animations with hardware acceleration

---

Built with ❤️ using Next.js and modern web technologies.