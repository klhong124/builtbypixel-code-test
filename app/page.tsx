'use client'

import Link from "next/link";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className={cn("min-h-screen flex flex-col items-center justify-center bg-background relative")}>

      {/* Logo at the top, centred */}
      <div className="flex flex-col items-center mb-8">
        <Logo />
      </div>
      <div className={cn("w-full max-w-2xl mx-auto p-0 rounded-2xl shadow-lg border border-gray-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden")}>
        {/* Header Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-stone-900 dark:to-stone-950 px-8 py-6 border-b border-gray-100 dark:border-stone-800 flex items-center justify-between">
          <div>
            <div className="flex items-center mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-200 tracking-tight mb-1">Pixel Code Test Submission</h1>
              <ThemeToggle className="ml-auto" />
            </div>
            <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-2">Frontend Test</span>
            <p className="text-gray-700 dark:text-stone-300 text-sm max-w-xl">
              Welcome! This is my submission for the Built by Pixel code test. Below you&apos;ll find a detailed breakdown of what I&apos;ve implemented in this repository, as well as instructions for exploring the app.
            </p>
          </div>

        </div>

        {/* Steps/Features Section */}
        <div className="px-8 py-6 space-y-6">
          <div className="rounded-lg border border-gray-100 dark:border-stone-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600 dark:text-green-300 text-lg">✅</span>
              <span className="font-semibold text-green-700 dark:text-green-300">GraphQL Integration & Task List</span>
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-stone-300 space-y-1">
              <li>Server-side data fetching from the provided GraphQL API</li>
              <li>Dynamic routing for task status: <code>/tasks/new</code>, <code>/tasks/completed</code>, etc.</li>
              <li>Displays a paginated, filterable list of tasks</li>
              <li>Modern UI using shadcn/ui and Tailwind CSS</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-100 dark:border-stone-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600 dark:text-blue-300 text-lg">🔎</span>
              <span className="font-semibold text-blue-700 dark:text-blue-300">Sorting, Filtering & UX</span>
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-stone-300 space-y-1">
              <li>Interactive client-side sorting (A–Z / Z–A) with visual indicators</li>
              <li>Status filter navigation with animated transitions</li>
              <li>Clear empty state and loading indicators</li>
              <li>Accessible, responsive design for all devices</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-100 dark:border-stone-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-600 dark:text-yellow-300 text-lg">✨</span>
              <span className="font-semibold text-yellow-700 dark:text-yellow-300">Bonus Features</span>
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-stone-300 space-y-1">
              <li>Pagination for large task lists</li>
              <li>Graceful error handling with user-friendly messages</li>
              <li>TypeScript throughout for type safety</li>
              <li>Theme toggle (light/dark mode)</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-8 pb-8 flex flex-col items-center gap-3">
          <Button asChild size="lg" className="w-full max-w-xs">
            <Link href="/tasks">
              Go to Tasks
            </Link>
          </Button>
          <p className="text-xs text-gray-500 dark:text-stone-400 text-center mt-2">
            Thank you for reviewing my work! If you have any questions or feedback, please let me know.
          </p>
        </div>
      </div>
    </main>
  );
}
