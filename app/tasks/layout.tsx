import { Suspense } from 'react';
import { getPageTitle, getLoadingText } from './utils';
import { cn } from '@/utils/cn';
import { TaskFilter } from './components/tasks.filter';
import { EnumTaskStatus } from '@/.codegen/schema';
import { TasksHeader } from './components/tasks.header';
import { TasksSidebar } from './components/tasks.sidebar';

export default async function TasksLayout({ params, children }: { params: Promise<{ status: string }>, children: React.ReactNode }) {
    const { status } = await params;

    return (
        <div className={cn("min-h-screen bg-background flex flex-col")}> {/* Full height, dark background */}
            {/* Header */}
            <TasksHeader/>

            <div className={cn("flex-1 flex flex-row w-full max-w-7xl mx-auto gap-6 pt-6")}> {/* Main content area */}
                {/* Sidebar (Filter) */}
                <TasksSidebar>
                    <TaskFilter />
                </TasksSidebar>

                {/* Main List Content */}
                <main className={cn("flex-1 flex flex-col gap-4")}> {/* List view, not grid */}
                    <Suspense fallback={
                        <div className={cn("text-center py-12")}
                        >
                            <div
                                className={cn("inline-block rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500 mb-4 animate-spin")}
                            />
                            <p
                                className={cn("text-gray-600 dark:text-gray-300 text-lg")}
                            >
                                {getLoadingText(status as EnumTaskStatus)}
                            </p>
                        </div>
                    }>
                        {children}
                    </Suspense>
                </main>
            </div>
        </div>
    );
}
