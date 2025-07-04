'use client';
import { cn } from '@/utils/cn';
import { motion } from 'motion/react';

export function TaskLoading() {
    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Loading tasks, please wait"
        >
            <motion.h1
                className={cn("text-2xl font-bold mb-4")}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                Task List
            </motion.h1>
            {/* Skeleton Page Control */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2" role="group" aria-label="Loading page navigation">
                    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" aria-hidden="true" />
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" aria-hidden="true" />
                    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" aria-hidden="true" />
                </div>
                <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" aria-hidden="true" />
            </div>
            <div className="space-y-4 py-8">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={cn(
                            'rounded-lg border border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-950 p-4 animate-pulse',
                            'flex flex-col gap-3'
                        )}
                        aria-hidden="true"
                        role="presentation"
                    >
                        <div className="h-5 w-1/2 bg-gray-200 dark:bg-gray-800 rounded" />
                        <div className="h-4 w-full bg-gray-100 dark:bg-gray-900 rounded" />
                        <div className="h-4 w-2/3 bg-gray-100 dark:bg-gray-900 rounded" />
                        <div className="flex gap-2 mt-2">
                            <div className="h-3 w-16 bg-gray-100 dark:bg-gray-900 rounded" />
                            <div className="h-3 w-20 bg-gray-100 dark:bg-gray-900 rounded" />
                        </div>
                    </motion.div>
                ))}
            </div>
            <span className="sr-only">Loading tasks...</span>
        </div>
    );
}