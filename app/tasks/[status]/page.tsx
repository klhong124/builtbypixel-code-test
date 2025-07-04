import { redirect } from 'next/navigation';
import { getTaskList, getTotalTask } from '@tasks/graphql/tasks.query';
import { TaskList } from '@tasks/components';
import { EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { normalizeStatus } from '@tasks/utils';
import { TaskError } from '@tasks/components/task.error';

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

    if (taskList.error || totalTask.error) {
        return <TaskError message={taskList.error || totalTask.error || 'Failed to fetch tasks. Please try again later.'} />;
    }

    return (
        <TaskList
            initialTasks={taskList.data || []}
            page={page}
            status={status}
            totalTask={totalTask.data || 0}
        />
    );
}