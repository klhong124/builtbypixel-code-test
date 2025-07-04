import { Suspense } from 'react';
import { cn } from '@/utils/cn';
import { TaskFilter } from './components/tasks.filter';
import { TasksHeader } from './components/tasks.header';
import { TasksSidebar } from './components/tasks.sidebar';
import { TaskLoading } from './components/task.loading';

export default async function TasksLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className={cn("min-h-screen bg-background flex flex-col px-2 md:px-0")}> {/* Full height, dark background */}
            {/* Header */}
            <TasksHeader />

            <div className={cn("flex-1 flex flex-row w-full max-w-7xl mx-auto gap-6 pt-6")}> {/* Main content area */}
                {/* Sidebar (Filter) */}
                <TasksSidebar>
                    <TaskFilter />
                </TasksSidebar>

                {/* Main List Content */}
                <main className={cn("flex-1 flex flex-col gap-4")}>
                    <Suspense fallback={<TaskLoading />}>
                        {children}
                    </Suspense>
                </main>
            </div>
        </div>
    );
}
