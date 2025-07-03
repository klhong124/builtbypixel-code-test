import { Suspense } from 'react';
import { getTaskList } from './graphql/tasks.query';
import { TaskFilter, TaskList } from './components';
import { getPageTitle, getLoadingText, getErrorMessage } from './utils';

async function TasksContent() {
    try {
        const { taskList } = await getTaskList();

        return (
            <div>
                <TaskFilter />
                <TaskList tasks={taskList} />
            </div>
        );
    } catch {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 dark:bg-red-900/20 dark:border-red-800">
                <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-800 dark:text-red-200">{getErrorMessage()}</p>
                </div>
            </div>
        );
    }
}

export default function TasksPage() {
    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                {getPageTitle()}
            </h1>

            <Suspense fallback={
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">{getLoadingText()}</p>
                </div>
            }>
                <TasksContent />
            </Suspense>
        </div>
    );
}