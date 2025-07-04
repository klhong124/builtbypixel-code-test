import { getTaskList, getTotalTask } from './graphql/tasks.query';
import { TaskList } from './components';
import { SortFindManyTaskInput } from '@/.codegen/schema';

interface TasksPageProps {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function TasksPage({ searchParams }: TasksPageProps) {
    const pageSize = 10;
    const page = Number(searchParams?.page) > 0 ? Number(searchParams.page) : 1;
    const skip = (page - 1) * pageSize;

    const [totalTask, taskList] = await Promise.all([
        getTotalTask(),
        getTaskList({
            limit: pageSize,
            skip,
            sort: SortFindManyTaskInput.IdDesc,
        })
    ]);
    return (
        <TaskList
            initialTasks={taskList}
            initialSortField="title"
            initialSortOrder={SortFindManyTaskInput.IdDesc}
            page={page}
            pageSize={pageSize}
            totalTask={totalTask}
        />
    );
}