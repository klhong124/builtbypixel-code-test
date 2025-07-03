'use client';

import { useState, useMemo } from 'react';
import { Task } from '@/.codegen/schema';
import { TaskCard } from './tasks.card';
import {
    sortTasksByName,
    SortOrder,
    getTaskCountText,
    getSortButtonText,
    toggleSortOrder
} from '../utils';

interface TaskListProps {
    tasks: Task[];
    status?: string;
}

export function TaskList({ tasks, status }: TaskListProps) {
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    const sortedTasks = useMemo(() => {
        return sortTasksByName(tasks, sortOrder);
    }, [tasks, sortOrder]);

    const handleSort = () => {
        setSortOrder(prev => toggleSortOrder(prev));
    };

    if (tasks.length === 0) {
        return (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/20 dark:border-blue-800">
                <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-blue-800 dark:text-blue-200">
                        No tasks found for status: {status || 'all'}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {getTaskCountText(tasks.length)}
                </h2>
                <button
                    onClick={handleSort}
                    className="btn-outline text-sm flex items-center gap-2"
                >
                    {sortOrder === 'asc' ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                    {getSortButtonText(sortOrder)}
                </button>
            </div>

            <div className="space-y-4">
                {sortedTasks.map((task) => (
                    <TaskCard key={task._id} task={task} />
                ))}
            </div>
        </div>
    );
}