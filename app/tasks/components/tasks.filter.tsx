'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { STATUS_OPTIONS } from '../utils';
import { Button } from '@/components/ui/button';

export function TaskFilter() {
    const pathname = usePathname();

    return (
        <div className="mb-6">
            <p className="text-sm font-medium mb-3 text-gray-600 dark:text-gray-300">
                Filter by Status:
            </p>
            <div className="flex flex-wrap gap-2">
                {STATUS_OPTIONS.map((option) => (
                    <Link href={option.path} key={option.value}>
                        <Button
                            className="btn-outline text-sm"
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