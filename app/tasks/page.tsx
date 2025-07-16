import { getTaskList, getTotalTask } from './graphql/tasks.query';
import { TaskList } from './components';
import { PAGE_SIZE } from '@tasks/utils';
import { TaskError } from './components/task.error';
import { TaskLoading } from './components/task.loading';
import { Suspense } from 'react';


export default async function TasksPage({ searchParams }: { searchParams: Promise<{ page: string }> }) {
    const { page: pageParam } = await searchParams;
    const page = Math.max(1, Number(pageParam) || 1);
    const skip = (page - 1) * PAGE_SIZE;

    const [totalTask, taskList] = await Promise.all([
        getTotalTask(),
        getTaskList({ limit: PAGE_SIZE, skip })
    ]);
    if (taskList.error || totalTask.error) {
        return <TaskError message={taskList.error || totalTask.error || 'Failed to fetch tasks. Please try again later.'} />;
    }
    return (
        <Suspense fallback={<TaskLoading />}>
            <TaskList
                initialTasks={taskList.data || []}
                page={page}
                totalTask={totalTask.data || 0}
            />
        </Suspense>

    );
}