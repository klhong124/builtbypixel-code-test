'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { STATUS_OPTIONS } from '../utils';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { motion } from 'motion/react';

export function TaskFilter() {
    const pathname = usePathname();

    return (
        <nav className={cn("mb-6")} role="navigation" aria-label="Task status filter">
            <h2 className={cn("text-sm font-medium mb-3 text-gray-600 dark:text-gray-300")}>
                Filter by Status:
            </h2>
            <div className={cn("flex flex-col gap-2")} role="group" aria-label="Status filter options">
                {STATUS_OPTIONS.map((option, index) => (
                    <motion.div key={option.value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                        <Button
                            asChild
                            variant={pathname === option.path ? "default" : "link"}
                            aria-label={`Filter tasks by ${option.label.toLowerCase()} status`}
                            aria-current={pathname === option.path ? 'page' : undefined}
                            aria-pressed={pathname === option.path}
                        >
                            <Link href={option.path}>
                                {option.label}
                            </Link>
                        </Button>
                    </motion.div>
                ))}
            </div>
        </nav>
    );
}