import { redirect } from 'next/navigation';
import { getTasksByStatus, getTotalTask } from '../graphql/tasks.query';
import { TaskList } from '../components';
import { EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { normalizeStatus } from '../utils';

interface StatusPageProps {
    params: Promise<{
        status: string;
    }>;
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function StatusPage({ params, searchParams }: StatusPageProps) {
    const { status } = await params;
    const normalizedStatus = normalizeStatus(status);

    const pageSize = 10;
    const page = Number(searchParams?.page) > 0 ? Number(searchParams.page) : 1;
    const skip = (page - 1) * pageSize;

    if (!normalizedStatus) {
        redirect('/tasks');
    }

    const [totalTask, taskList] = await Promise.all([
        getTotalTask({ filter: { status: normalizedStatus as EnumTaskStatus } }),
        getTasksByStatus(normalizedStatus as EnumTaskStatus, {
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