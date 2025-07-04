'use client';

import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Moon, Sun, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { TaskFilter } from './tasks.filter';

export function TasksHeader() {
    const { theme, setTheme } = useTheme();
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    'sticky top-0 z-30 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60',
                    'px-0 md:px-6 py-4 flex items-center justify-between',
                    'max-w-7xl mx-auto'
                )}
                role="banner"
            >
                <h1 className={cn('text-2xl md:text-3xl font-bold text-foreground tracking-tight')}>
                    <Logo />
                </h1>
                <div className="flex items-center gap-2" role="group" aria-label="Header actions">
                    {/* Mobile Filter Button */}
                    <Button
                        onClick={() => setIsMobileDrawerOpen(true)}
                        variant="outline"
                        size="sm"
                        className="md:hidden"
                        aria-label="Open task filter menu"
                        aria-expanded={isMobileDrawerOpen}
                        aria-controls="mobile-filter-drawer"
                    >
                        <Filter className="w-4 h-4 mr-2" aria-hidden="true" />
                        Filter
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        className={cn('p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors')}
                    >
                        {theme === 'dark' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
                    </Button>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileDrawerOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                            onClick={() => setIsMobileDrawerOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Drawer */}
                        <motion.div
                            id="mobile-filter-drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 z-50 md:hidden shadow-2xl"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="drawer-title"
                            aria-describedby="drawer-content"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                                <h2 id="drawer-title" className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    Filter Tasks
                                </h2>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsMobileDrawerOpen(false)}
                                    className="h-8 w-8"
                                    aria-label="Close filter menu"
                                >
                                    <X className="h-4 w-4" aria-hidden="true" />
                                </Button>
                            </div>

                            {/* Drawer Content */}
                            <div id="drawer-content" className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
                                <TaskFilter />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}