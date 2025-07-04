'use client';

import { Task } from '@/.codegen/schema';
import { getStatusLabel } from '@/app/tasks/utils/tasks.helpers';
import { cn } from '@/utils/cn';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Heart, DollarSign, Wifi, AlertTriangle } from 'lucide-react';

interface TaskCardProps {
    task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
    const getBadgeVariant = (status: string | undefined) => {
        switch (status) {
            case 'NEW':
                return 'default';
            case 'OFFER_ACCEPTED':
                return 'secondary';
            case 'COMPLETED':
                return 'outline';
            default:
                return 'outline';
        }
    };

    const getBadgeStyle = (status: string | undefined) => {
        switch (status) {
            case 'NEW':
                return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700';
            case 'OFFER_ACCEPTED':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700';
            case 'COMPLETED':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700';
        }
    };

    const getLatestOffer = () => {
        if (!task.latestOffers || task.latestOffers.length === 0) return null;
        const latestOffer = task.latestOffers[0];
        if (!latestOffer?.offers || latestOffer.offers.length === 0) return null;
        return latestOffer.offers[0]?.value;
    };

    return (
        <div
            className={cn(
                'card bg-white dark:bg-stone-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm',
                'w-full py-4 px-6 mb-4 cursor-pointer relative',
                'transition-all duration-300 ease-in-out',
                'hover:border-blue-300 dark:hover:border-blue-700',
                'hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-blue-900/20',
                'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0',
                'before:bg-blue-500 dark:before:bg-blue-700',
                'before:transition-all before:duration-300 before:ease-in-out',
                'overflow-hidden',
                'hover:before:w-1'
            )}

        >
            {/* Header: Title & Status Badge */}
            <div className={cn('flex items-center justify-between gap-2 mb-1')}>
                <h3 className={cn('font-semibold text-gray-900 dark:text-gray-100 text-base line-clamp-2 min-w-0')}>{task.title}</h3>

                {/* Status Badges */}
                <div className={cn('flex items-center gap-2 ml-auto')}>
                    {task.is_suspended && (
                        <span className='flex items-center gap-1 text-orange-600 dark:text-orange-400 text-xs'><AlertTriangle className='w-3 h-3' />Suspended</span>
                    )}
                    {!task.is_active && (
                        <span className='flex items-center gap-1 text-red-600 dark:text-red-400 text-xs'><AlertTriangle className='w-3 h-3' />Inactive</span>
                    )}
                </div>

                <Badge
                    variant={getBadgeVariant(task.status ?? undefined)}
                    className={cn(getBadgeStyle(task.status ?? undefined), 'ml-2 px-2 py-0.5 text-xs')}
                >
                    {getStatusLabel(task.status)}
                </Badge>
            </div>

            {/* Stats Row */}
            <div className={cn('flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 my-2')}>
                <div className='flex items-center gap-3'>
                    <span className='flex items-center gap-1'><Heart className='w-3 h-3' />{task.number_of_likes ?? 0}</span>
                    <span className='flex items-center gap-1'><DollarSign className='w-3 h-3' />{task.number_of_offers ?? 0} offers</span>
                    {task.distance && <span className='flex items-center gap-1'><MapPin className='w-3 h-3' />{task.distance}km</span>}
                    {task.human_friendly_end_date && <span className='flex items-center gap-1'><Calendar className='w-3 h-3' />{task.human_friendly_end_date}</span>}
                    {task.is_remote && <span className='flex items-center gap-1'><Wifi className='w-3 h-3' />{task.is_remote ? 'Remote' : 'Onsite'}</span>}
                </div>
            </div>


            {/* Description */}
            {task.description && (
                <p className={cn('text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2')}>{task.description}</p>
            )}

            {/* Timestamps Footer */}
            {getLatestOffer() && (
                <div className={cn('flex justify-end border-t border-gray-100 dark:border-gray-800 pt-2 mt-2')}>
                    <span className='text-sm font-medium text-green-600 dark:text-green-400'>£{getLatestOffer()}</span>
                </div>
            )}
        </div>
    );
}