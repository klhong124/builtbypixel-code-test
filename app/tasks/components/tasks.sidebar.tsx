'use client';

import { motion } from 'motion/react';
import { cn } from '@/utils/cn';
import { TaskFilter } from './tasks.filter';

export function TasksSidebar() {
    return (
        <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
                'hidden md:flex flex-col w-72 shrink-0 sticky top-24 h-[calc(100vh-6rem)] z-20',
                'rounded-xl border border-border bg-card/80 backdrop-blur p-4'
            )}
        >
            <div className="h-full pr-2 overflow-y-auto">
                <TaskFilter />
            </div>
        </motion.aside>
    );
}