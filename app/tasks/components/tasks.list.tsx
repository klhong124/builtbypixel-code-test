'use client';

import { Task, EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { TaskCard } from './tasks.card';
import { getTaskCountText } from '../utils';
import { useTasks } from '../hooks/useTasks';
import { cn } from '@/utils/cn';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface TaskListProps {
    initialTasks: Task[];
    status?: EnumTaskStatus;
    initialSortField?: string;
    initialSortOrder?: SortFindManyTaskInput;
    page: number;
    pageSize: number;
    totalTask: number;
}

export function TaskList({
    initialTasks,
    status,
    initialSortField = 'title',
    initialSortOrder = SortFindManyTaskInput.IdDesc,
    page,
    pageSize,
    totalTask
}: TaskListProps) {
    const router = useRouter();
    const { sortOrder, tasks, toggleSort, getSortButtonText } = useTasks({
        initialTasks,
        status,
    });
    const totalPages = Math.ceil(totalTask / pageSize);

    const handleNext = () => {
        if (page < totalPages) {
            router.push(`?page=${page + 1}`);
        }
    };
    const handlePrev = () => {
        if (page > 1) {
            router.push(`?page=${page - 1}`);
        }
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
            <div className={cn("flex justify-between items-center mb-6")}>
                <h2 className={cn("text-lg font-semibold text-gray-900 dark:text-gray-100")}>
                    {getTaskCountText(tasks.length)}
                </h2>
                <button
                    onClick={toggleSort}
                    className={cn(
                        "btn-outline text-sm flex items-center gap-2",
                        "px-3 py-2 rounded-md border transition-colors",
                        "hover:bg-gray-50 dark:hover:bg-gray-800",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    )}
                >
                    {sortOrder === 'asc' ? (
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

            <div className={cn('flex justify-between items-center mt-6')}>
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className={cn('btn-outline px-3 py-2 rounded-md border', 'disabled:opacity-50')}
                >
                    Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className={cn('btn-outline px-3 py-2 rounded-md border', 'disabled:opacity-50')}
                >
                    Next
                </button>
            </div>
        </div>
    );
}