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
        <div className={cn("mb-6")}>
            <p className={cn("text-sm font-medium mb-3 text-gray-600 dark:text-gray-300")}>
                Filter by Status:
            </p>
            <div className={cn("flex flex-col gap-2")}>
                {STATUS_OPTIONS.map((option, index) => (
                    <motion.div key={option.value}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                        <Button
                            asChild
                            variant={pathname === option.path ? "default" : "link"}
                        >
                            <Link href={option.path}>
                                {option.label}
                            </Link>
                        </Button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}