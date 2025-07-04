'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const Logo = () => {
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
                        "h-8 w-auto cursor-pointer px-1",
                        theme === 'light' ? 'invert' : ''
                    )} />
            )}
        </div>

    );
}