'use client';

import { Task } from '@/.codegen/schema';
import { formatDate, getStatusColor, getStatusLabel } from '../utils';

interface TaskCardProps {
    task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
    const getBadgeClass = (status: string | undefined) => {
        switch (status) {
            case 'NEW':
                return 'badge-blue';
            case 'OFFER_ACCEPTED':
                return 'badge-yellow';
            case 'COMPLETED':
                return 'badge-green';
            default:
                return 'badge-gray';
        }
    };

    return (
        <div className="card p-4 hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-3">
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 mr-4">
                        {task.title}
                    </h3>
                    <span className={`${getBadgeClass(task.status ?? undefined)} flex-shrink-0`}>
                        {getStatusLabel(task.status ?? undefined) ?? 'Unknown'}
                    </span>
                </div>

                {task.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                        {task.description}
                    </p>
                )}

                <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>Created: {formatDate(task.createdAt)}</span>
                    <span>Updated: {formatDate(task.updatedAt)}</span>
                </div>
            </div>
        </div>
    );
}