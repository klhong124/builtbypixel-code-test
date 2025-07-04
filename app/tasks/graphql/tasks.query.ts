'use server';

import { Task, QueryTaskListArgs, SortFindManyTaskInput } from '@/.codegen/schema';
import client from '@/utils/apolloClient';

// Import the GraphQL query from the .gql file using graphql-tag
import GET_TOTAL_TASK_QUERY from './GetTotalTask.gql';

export async function getTotalTask(params: QueryTaskListArgs = {}): Promise<{ data?: number , error?: string }> {
// TODO: add get total task query in GraphQL
  try {
    const result = await client.query({
      query: GET_TOTAL_TASK_QUERY,
      variables: {
        limit: 9999,
        filter: params.filter || {},
      },
    });

    return { data: result.data.taskList.length };
  } catch {
    return { error: 'Failed to fetch tasks. Please try again later.' };
  }
}

import TASK_LIST_QUERY from './TaskList.gql';

export async function getTaskList(params: QueryTaskListArgs = {}): Promise<{ data?: Task[], error?: string }> {

  try {
    const result = await client.query({
      query: TASK_LIST_QUERY,
      variables: {
        limit: params.limit || 10,
        skip: params.skip || 0,
        sort: params.sort || SortFindManyTaskInput.IdDesc,
        filter: params.filter || {},
      },
      fetchPolicy: 'no-cache',
    });

    return { data: result.data.taskList as Task[] };
  } catch {
    return { error: 'Failed to fetch tasks. Please try again later.' };
  }
}
