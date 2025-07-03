'use server';

import { gql } from '@apollo/client';
import { Task } from '@/.codegen/schema';


export interface TaskListResponse {
  taskList: Task[];
}

import client from '@/utils/apolloClient';

export async function getTaskList() {
  try {
    const { data } = await client.query({
      query: gql`
      query GetTaskList {
        taskList {
          _id
          title
          description
          createdAt
          updatedAt
          status
        }
      }`,
      fetchPolicy: 'no-cache',
    });

    return data as TaskListResponse;
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
    throw error;
  }
}