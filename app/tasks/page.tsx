import { getTaskList, getTotalTask } from './graphql/tasks.query';
import { TaskList } from './components';
import { PAGE_SIZE } from '@tasks/utils';

interface TasksPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function TasksPage({ searchParams }: TasksPageProps) {
    const { page: pageParam } = await searchParams;
    const page = Math.max(1, Number(pageParam) || 1);
    const skip = (page - 1) * PAGE_SIZE;

    const [totalTask, taskList] = await Promise.all([
        getTotalTask(),
        getTaskList({ limit: PAGE_SIZE, skip })
    ]);
    return (
        <TaskList
            initialTasks={taskList}
            page={page}
            totalTask={totalTask}
        />
    );
}