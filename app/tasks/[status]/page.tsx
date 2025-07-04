import { redirect } from 'next/navigation';
import { getTasksByStatus } from '../graphql/tasks.query';
import { TasksPageContent, TasksContent } from '../components';
import { EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { normalizeStatus } from '../utils';

interface StatusPageProps {
    params: Promise<{
        status: string;
    }>;
}

async function StatusTasksData({ status }: { status: EnumTaskStatus }) {
    const { taskList } = await getTasksByStatus(status, {
        limit: 10,
        skip: 0,
        sort: SortFindManyTaskInput.IdDesc,
    });

    return <TasksContent status={status} taskList={taskList} />;
}

export default async function StatusPage({ params }: StatusPageProps) {
    const { status } = await params;
    const normalizedStatus = normalizeStatus(status);

    if (!normalizedStatus) {
        redirect('/tasks');
    }

    return (
        <TasksPageContent status={normalizedStatus}>
            <StatusTasksData status={normalizedStatus} />
        </TasksPageContent>
    );
}