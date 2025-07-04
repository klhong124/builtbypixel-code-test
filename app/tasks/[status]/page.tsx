import { redirect } from 'next/navigation';
import { getTaskList, getTotalTask } from '../graphql/tasks.query';
import { TaskList } from '../components';
import { EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { normalizeStatus } from '../utils';
import { PAGE_SIZE } from '@tasks/utils';

interface StatusPageProps {
    params: Promise<{
        status: string;
    }>;
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function StatusPage({ params, searchParams }: StatusPageProps) {
    const { status: statusParam } = await params;
    const status = normalizeStatus(statusParam);

    const page = Math.max(1, Number(searchParams?.page) || 1);
    const skip = (page - 1) * PAGE_SIZE;

    if (!status) {
        redirect('/tasks');
    }

    const [totalTask, taskList] = await Promise.all([
        getTotalTask({ filter: { status: status as EnumTaskStatus } }),
        getTaskList({
            limit: PAGE_SIZE,
            skip,
            filter: { status: status as EnumTaskStatus },
        })
    ]);

    return (
        <TaskList
            initialTasks={taskList}
            page={page}
            status={status}
            totalTask={totalTask}
        />
    );
}