'use client';

import { useCallback, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export const ThemeToggle = ({ className }: { className?: string }) => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    // This is a hack to prevent the hydration error when the theme is not mounted
    const toggleRef = useCallback((node: HTMLButtonElement) => {
        if (node) {
            setIsMounted(true);
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button
            ref={toggleRef}
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={isMounted ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode` : "Toggle theme"}
            className={cn('p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-stone-800 transition-colors', className)}
        >
            {isMounted && theme === 'dark' ? (
                <Moon aria-hidden="true" />
            ) : (
                <Sun aria-hidden="true" />
            )}
        </Button>
    );
};