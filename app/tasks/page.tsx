import { getTaskList } from './graphql/tasks.query';
import { TasksPageContent, TasksContent } from './components';
import { SortFindManyTaskInput } from '@/.codegen/schema';

async function TasksData() {
    const { taskList } = await getTaskList({
        limit: 10,
        skip: 0,
        sort: SortFindManyTaskInput.IdDesc,
    });

    return <TasksContent taskList={taskList} />;
}

export default function TasksPage() {
    return (
        <TasksPageContent>
            <TasksData />
        </TasksPageContent>
    );
}