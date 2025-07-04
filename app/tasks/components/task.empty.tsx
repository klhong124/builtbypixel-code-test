import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info, Search, Filter } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface TaskEmptyProps {
    status?: string;
    className?: string;
    showSuggestions?: boolean;
}

export function TaskEmpty({ status, className, showSuggestions = true }: TaskEmptyProps) {
    const statusText = status ? status.toLowerCase() : 'all';

    return (
        <Alert
            className={cn('my-8 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20', className)}
            role="status"
            aria-live="polite"
            aria-label={`No tasks found for ${statusText} status`}
        >
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <AlertTitle className="text-blue-800 dark:text-blue-200">
                No tasks found
            </AlertTitle>
            <AlertDescription className="text-blue-700 dark:text-blue-300">
                {status
                    ? `No tasks found for status: ${status}`
                    : 'No tasks are currently available.'
                }
            </AlertDescription>

            {showSuggestions && (
                <div className="mt-4 space-y-2">
                    <p className="text-sm text-blue-600 dark:text-blue-300">
                        Try these suggestions:
                    </p>
                    <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1 ml-4">
                        <li className="flex items-center gap-2">
                            <Search className="w-3 h-3" aria-hidden="true" />
                            Check other status filters
                        </li>
                        <li className="flex items-center gap-2">
                            <Filter className="w-3 h-3" aria-hidden="true" />
                            Clear any active filters
                        </li>
                    </ul>
                    <div className="mt-3 flex gap-2">
                        <Button asChild variant="outline" size="sm">
                            <Link href="/tasks" aria-label="View all tasks">
                                View All Tasks
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <Link href="/tasks/new" aria-label="View new tasks">
                                View New Tasks
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </Alert>
    );
}