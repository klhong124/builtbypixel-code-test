'use client';

import { Task, EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { TaskCard } from '@tasks/components/tasks.card';
import { useTasks } from '@tasks/hooks/useTasks';
import { cn } from '@/utils/cn';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PAGE_SIZE } from '@tasks/utils';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';

interface TaskListProps {
    initialTasks: Task[];
    status?: EnumTaskStatus;
    page: number;
    totalTask: number;
}

export function TaskList({
    initialTasks,
    status,
    page,
    totalTask
}: TaskListProps) {
    const router = useRouter();
    const { sortOrder, tasks, toggleSort, getSortButtonText } = useTasks({
        initialTasks,
    });
    const totalPages = Math.ceil(totalTask / PAGE_SIZE);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
            router.push(`?page=${newPage}`);
        }
    };

    // Generate page numbers (with ellipsis if needed)
    const getPages = () => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
        if (page <= 3) return [1, 2, 3, 4, '...', totalPages];
        if (page >= totalPages - 2) return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        return [1, '...', page - 1, page, page + 1, '...', totalPages];
    };

    if (tasks.length === 0) {
        return (
            <div className={cn("bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/20 dark:border-blue-800")}>
                <div className={cn("flex items-center")}>
                    <svg className={cn("w-5 h-5 text-blue-500 mr-2")} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className={cn("text-blue-800 dark:text-blue-200")}>
                        No tasks found for status: {status || 'all'}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Task List</h1>
            {/* Simplified Page Control */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Page {page} of {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === totalPages}
                        aria-label="Next page"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
                <button
                    onClick={toggleSort}
                    className={cn(
                        "btn-outline text-sm flex items-center gap-2",
                        "px-3 py-2 rounded-md border transition-colors",
                        "hover:bg-gray-50 dark:hover:bg-gray-800",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    )}
                >
                    {sortOrder === 'a-z' ? (
                        <ChevronUp className={cn("w-4 h-4")} />
                    ) : (
                        <ChevronDown className={cn("w-4 h-4")} />
                    )}
                    {getSortButtonText()}
                </button>
            </div>

            <div className={cn("space-y-4")}>
                {tasks.map((task) => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination className="my-8">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => handlePageChange(page - 1)}
                            aria-disabled={page === 1}
                            tabIndex={page === 1 ? -1 : 0}
                        />
                    </PaginationItem>
                    {getPages().map((p, idx) =>
                        typeof p === 'number' ? (
                            <PaginationItem key={p}>
                                <PaginationLink
                                    isActive={p === page}
                                    onClick={() => handlePageChange(p)}
                                    aria-current={p === page ? 'page' : undefined}
                                    tabIndex={p === page ? -1 : 0}
                                >
                                    {p}
                                </PaginationLink>
                            </PaginationItem>
                        ) : (
                            <PaginationItem key={`ellipsis-${idx}`}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    )}
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => handlePageChange(page + 1)}
                            aria-disabled={page === totalPages}
                            tabIndex={page === totalPages ? -1 : 0}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}