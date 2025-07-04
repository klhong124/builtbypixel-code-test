'use server';

import { Task, EnumTaskStatus, QueryTaskListArgs, SortFindManyTaskInput, FilterFindManyTaskInput } from '@/.codegen/schema';
import client from '@/utils/apolloClient';

// Import the GraphQL query from the .gql file using graphql-tag
import TASK_LIST_QUERY from './TaskList.gql';

export interface TaskListResponse {
  taskList: Task[];
}

export async function getTaskList(params: QueryTaskListArgs = {}) {
  try {
    const { data } = await client.query({
      query: TASK_LIST_QUERY,
      variables: {
        limit: params.limit || 10,
        skip: params.skip || 0,
        sort: params.sort || SortFindManyTaskInput.IdDesc,
        filter: params.filter || {},
      },
      fetchPolicy: 'no-cache',
    });

    return data as TaskListResponse;
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    throw error;
  }
}

// Helper function to get tasks with status filter
export async function getTasksByStatus(status: EnumTaskStatus, params: Omit<QueryTaskListArgs, 'filter'> = {}) {
  const filter: FilterFindManyTaskInput = { status };
  return getTaskList({
    ...params,
    filter,
  });
}

// Helper function to get tasks with sorting
export async function getTasksWithSort(sortField: SortFindManyTaskInput, params: Omit<QueryTaskListArgs, 'sort'> = {}) {
  return getTaskList({
    ...params,
    sort: sortField,
  });
}