'use client'

import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className={cn("min-h-screen flex items-center justify-center bg-background relative")}>
      <div className={cn("w-full max-w-2xl mx-auto p-8 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800")}>
        <div className="flex justify-between items-center mb-6">
          <h1 className={cn("text-3xl md:text-4xl font-bold text-foreground tracking-tight")}>Welcome!</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={cn('p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors')}
          >
            {theme === 'dark' ? <Moon /> : <Sun />}
          </Button>
        </div>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Pixel Code Test Submission</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Thank you for reviewing my submission for the Built by Pixel code test. This project demonstrates a dynamic, performant Next.js application that consumes a GraphQL API and allows users to browse, filter, and interact with a list of tasks.
          </p>
        </section>
        <section className="mb-6">
          <h3 className="font-semibold mb-1">What you'll find here:</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
            <li>Server-side data fetching from the provided GraphQL API</li>
            <li>Dynamic routing and filtering by task status</li>
            <li>Client-side sorting and pagination</li>
            <li>Modern, accessible UI with loading and empty states</li>
            <li>Graceful error handling and full TypeScript support</li>
          </ul>
        </section>
        <div className="flex flex-col items-center gap-3">
          <Button asChild size="lg" className="w-full max-w-xs">
            <Link href="/tasks">
              Go to Tasks
            </Link>
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            If you have any questions or feedback, please let me know. Thank you for your time!
          </p>
        </div>
      </div>
    </main>
  );
}
