'use client';

import { Task, EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { TaskCard } from './tasks.card';
import { getTaskCountText, getSortButtonText } from '../utils';
import { cn } from '@/utils/cn';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface TaskListProps {
    initialTasks: Task[];
    status?: EnumTaskStatus;
    initialSortField?: string;
    initialSortOrder?: SortFindManyTaskInput;
}

export function TaskList({
    initialTasks,
    status,
    initialSortField = 'title',
    initialSortOrder = SortFindManyTaskInput.IdDesc
}: TaskListProps) {
    // Use the initial data from server-side rendering
    const tasks = initialTasks;
    const totalTasks = tasks.length;

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
                    {getTaskCountText(totalTasks)}
                </h2>
                <div className={cn("text-sm text-gray-600 dark:text-gray-300")}>
                    Sorted by: {getSortButtonText(initialSortOrder)}
                </div>
            </div>

            <div className={cn("space-y-4")}>
                {tasks.map((task) => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>
        </div>
    );
}