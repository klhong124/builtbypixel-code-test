'use server';

import { Task, EnumTaskStatus, QueryTaskListArgs, SortFindManyTaskInput, FilterFindManyTaskInput } from '@/.codegen/schema';
import client from '@/utils/apolloClient';

// Import the GraphQL query from the .gql file using graphql-tag
import TASK_LIST_QUERY from './TaskList.gql';
import GET_TOTAL_TASK_QUERY from './GetTotalTask.gql';


export async function getTotalTask(params: QueryTaskListArgs = {}) {
// TODO: add get total task query in GraphQL
  try {
    const { data } = await client.query({
      query: GET_TOTAL_TASK_QUERY,
      variables: {
        limit: 9999,
        filter: params.filter || {},
      },
    });

    return data.taskList.length;
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    throw error;
  }
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

    return data.taskList as Task[];
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