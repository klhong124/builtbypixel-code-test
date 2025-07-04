'use client';

import { Task, EnumTaskStatus } from '@/.codegen/schema';
import { TaskCard } from '@tasks/components/tasks.card';
import { TaskEmpty } from '@tasks/components/task.empty';
import { useTasks } from '@tasks/hooks/useTasks';
import { cn } from '@/utils/cn';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PAGE_SIZE } from '@tasks/utils';
import { motion } from 'motion/react';
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
            <TaskEmpty status={status} />
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            role="main"
            aria-label="Task list section"
        >
            <motion.h1
                className={cn("text-2xl font-bold mb-4")}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                Task List
            </motion.h1>
            {/* Simplified Page Control */}
            <motion.div
                className="flex items-center justify-between mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                role="navigation"
                aria-label="Task list navigation"
            >
                <div className="flex items-center gap-2" role="group" aria-label="Page navigation">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        aria-label="Go to previous page"
                        aria-disabled={page === 1}
                    >
                        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    </Button>
                    <span className="text-sm text-gray-500 dark:text-gray-400" aria-label={`Page ${page} of ${totalPages}`}>
                        Page {page} of {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === totalPages}
                        aria-label="Go to next page"
                        aria-disabled={page === totalPages}
                    >
                        <ChevronRight className="w-4 h-4" aria-hidden="true" />
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
                    aria-label={`Sort tasks ${sortOrder === 'a-z' ? 'descending' : 'ascending'}. Current sort: ${getSortButtonText()}`}
                    aria-pressed={sortOrder === 'a-z'}
                >
                    {sortOrder === 'a-z' ? (
                        <ChevronUp className={cn("w-4 h-4")} aria-hidden="true" />
                    ) : (
                        <ChevronDown className={cn("w-4 h-4")} aria-hidden="true" />
                    )}
                    {getSortButtonText()}
                </button>
            </motion.div>

            <motion.div
                className={cn("space-y-4")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                role="list"
                aria-label={`Task list with ${tasks.length} tasks`}
            >
                {tasks.map((task, index) => (
                    <motion.div
                        key={task._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.4 + (index * 0.03)
                        }}
                        role="listitem"
                    >
                        <TaskCard task={task} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Pagination */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                role="navigation"
                aria-label="Pagination navigation"
            >
                <Pagination className="my-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => handlePageChange(page - 1)}
                                aria-disabled={page === 1}
                                tabIndex={page === 1 ? -1 : 0}
                                aria-label="Go to previous page"
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
                                        aria-label={`Go to page ${p}${p === page ? ' (current page)' : ''}`}
                                    >
                                        {p}
                                    </PaginationLink>
                                </PaginationItem>
                            ) : (
                                <PaginationItem key={`ellipsis-${idx}`}>
                                    <PaginationEllipsis aria-label="More pages available" />
                                </PaginationItem>
                            )
                        )}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => handlePageChange(page + 1)}
                                aria-disabled={page === totalPages}
                                tabIndex={page === totalPages ? -1 : 0}
                                aria-label="Go to next page"
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </motion.div>
        </motion.div>
    );
}