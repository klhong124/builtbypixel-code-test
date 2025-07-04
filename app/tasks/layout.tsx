import { Suspense } from 'react';
import { getPageTitle, getLoadingText } from './utils';
import { cn } from '@/utils/cn';
import { TaskFilter } from './components/tasks.filter';
import { EnumTaskStatus } from '@/.codegen/schema';

export default async function TasksLayout({ params, children }: { params: Promise<{ status: string }>, children: React.ReactNode }) {
    const { status } = await params;

    return (
        <div className={cn("max-w-6xl mx-auto py-8 px-4")}>
            <h1 className={cn("text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8")}>
                {getPageTitle(status as EnumTaskStatus)}
            </h1>

            <Suspense fallback={
                <div className={cn("text-center py-12")}>
                    <div className={cn("inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mb-4")}></div>
                    <p className={cn("text-gray-600 dark:text-gray-300")}>{getLoadingText(status as EnumTaskStatus)}</p>
                </div>
            }>
                <div>
                    <TaskFilter />
                    {children}
                </div>
            </Suspense>
        </div>
    );
}
