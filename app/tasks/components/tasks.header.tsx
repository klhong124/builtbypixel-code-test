'use client';

import { motion } from 'motion/react';
import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';


const Logo = () => {
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    // This is a hack to prevent the hydration error when the logo is not mounted with theme
    const logoRef = useCallback((node: HTMLImageElement) => {
        if (node) {
            setIsMounted(true);
        }
    }, []);
    return (
        <div ref={logoRef} >
            {isMounted && (
                <Image
                    onClick={() => router.push('/')}
                    src="https://www.builtbypixel.com/images/logo-white.svg"
                    alt="Built By Pixel"
                    width={120}
                    height={32}
                    className={cn(
                        "h-8 w-auto cursor-pointer",
                        theme === 'light' ? 'invert' : ''
                    )} />
            )}
        </div>

    );
}

export function TasksHeader() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                'sticky top-0 z-30 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60',
                'px-6 py-4 flex items-center justify-between',
                'max-w-7xl mx-auto'
            )}
        >
            <h1 className={cn('text-2xl md:text-3xl font-bold text-foreground tracking-tight')}>
                <Logo />
            </h1>
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className={cn('p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors')}
            >
                {theme === 'dark' ? <Moon /> : <Sun />}
            </Button>
        </motion.header>
    );
}