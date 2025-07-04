'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { STATUS_OPTIONS } from '../utils';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';

export function TaskFilter() {
    const pathname = usePathname();

    return (
        <div className={cn("mb-6")}>
            <p className={cn("text-sm font-medium mb-3 text-gray-600 dark:text-gray-300")}>
                Filter by Status:
            </p>
            <div className={cn("flex flex-wrap gap-2")}>
                {STATUS_OPTIONS.map((option) => (
                    <Link href={option.path} key={option.value}>
                        <Button
                            className={cn("btn-outline text-sm")}
                            variant={pathname === option.path ? "default" : "outline"}
                        >
                            {option.label}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}