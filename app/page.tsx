'use client'

import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import { Moon, Sun } from "lucide-react"

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={cn("min-h-screen flex items-center justify-center relative")}>
      <div className={cn("text-center space-y-6")}>
        <h1 className={cn("text-4xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight mb-1")}>
          Hey there!
        </h1>

        <button
          onClick={toggleTheme}
          className={cn("p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors")}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? (
            <Moon />
          ) : (
            <Sun />
          )}
        </button>

        <p className={cn("text-sm text-gray-600 dark:text-gray-300 tracking-tight")}>
          Welcome to the Built by Pixel code test.
        </p>

        <div className={cn("space-y-3")}>
          <Link
            href="/tasks"
            className={cn("btn-outline text-lg px-8 py-3")}
          >
            View Tasks
          </Link>

          <p className={cn("text-xs text-gray-500 dark:text-gray-400")}>
            Explore and manage your tasks with filtering and sorting capabilities
          </p>
        </div>
      </div>
    </div>
  );
}
