# Task Management Application

A modern, responsive task management application built with Next.js 15, featuring real-time updates, advanced filtering, and a beautiful user interface with smooth animations.

## 🌐 Live Demo

**🔗 [View Live Demo](https://builtbypixel-code-test.vercel.app)**

Experience the application with real data and see all features in action!

## 🚀 Features

- **Task Management**: View, filter, and sort tasks by status
- **Real-time Updates**: Live data synchronization with GraphQL
- **Advanced Filtering**: Filter tasks by status (New, Offer Accepted, Completed)
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
   cp .env.example .env.local
   ```

   Update the `.env.local` file with your GraphQL endpoint and any other required environment variables.

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
├── tasks/                    # Task management feature
│   ├── [status]/            # Dynamic status routes
│   ├── components/          # Task-specific components
│   ├── graphql/            # GraphQL queries and mutations
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Task utility functions
├── components/              # Shared UI components
└── utils/                   # Global utilities
```

## 🎨 Key Components

- **TaskList**: Main task display with pagination and sorting
- **TaskCard**: Individual task cards with hover effects
- **TaskFilter**: Status-based filtering sidebar
- **TaskLoading**: Skeleton loading states with animations

## 🔧 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun codegen` - Generate GraphQL types

## 🌟 Features in Detail

### Task Filtering
- Filter by status: New, Offer Accepted, Completed
- URL-based filtering with dynamic routes
- Persistent filter state

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
