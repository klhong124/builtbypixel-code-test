'use client';

import { useState, useMemo } from 'react';
import { Task, EnumTaskStatus, SortFindManyTaskInput } from '@/.codegen/schema';
import { sortTasksByName } from '../utils/task.helpers';

interface UseTasksProps {
  initialTasks: Task[];
  status?: EnumTaskStatus;
}

export function useTasks({ initialTasks, status }: UseTasksProps) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filter tasks by status if provided
  const filteredTasks = useMemo(() => {
    if (!status) return initialTasks;
    return initialTasks.filter(task => task.status === status);
  }, [initialTasks, status]);

  // Sort tasks alphabetically by title
  const sortedTasks = useMemo(() => {
    return sortTasksByName(filteredTasks, sortOrder);
  }, [filteredTasks, sortOrder]);

  // Toggle sort order
  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  // Get sort button text
  const getSortButtonText = () => {
    return `Sort by Name (${sortOrder === 'asc' ? 'A-Z' : 'Z-A'})`;
  };

  // Get task count
  const taskCount = sortedTasks.length;

  return {
    tasks: sortedTasks,
    sortOrder,
    taskCount,
    toggleSort,
    getSortButtonText,
  };
}