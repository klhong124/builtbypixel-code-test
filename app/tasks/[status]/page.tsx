import { redirect } from 'next/navigation';
import { getTaskList, getTotalTask } from '@tasks/graphql/tasks.query';
import { TaskList } from '@tasks/components';
import { EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { normalizeStatus } from '@tasks/utils';

export default async function StatusPage({ params, searchParams }: { params: Promise<{ status: string }>, searchParams: Promise<{ page: string }> }) {
    const [
        { status: statusParam },
        { page: pageParam }
    ] = await Promise.all([params, searchParams]);
    const status = normalizeStatus(statusParam);

    const pageSize = 10;
    const page = Number(pageParam) > 0 ? Number(pageParam) : 1;
    const skip = (page - 1) * pageSize;

    if (!status) {
        redirect('/tasks');
    }

    const [totalTask, taskList] = await Promise.all([
        getTotalTask({ filter: { status: status as EnumTaskStatus } }),
        getTaskList({
            limit: pageSize,
            skip,
            sort: SortFindManyTaskInput.IdDesc,
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