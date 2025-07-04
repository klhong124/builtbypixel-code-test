'use client';

import { useState, useMemo } from 'react';
import { Task } from '@/.codegen/schema';
import { SortOrder, sortTasksByName } from '../utils/tasks.helpers';

interface UseTasksProps {
  initialTasks: Task[];
}

export function useTasks({ initialTasks }: UseTasksProps) {
  const [sortOrder, setSortOrder] = useState<SortOrder>('a-z');

  // Sort tasks alphabetically by title
  const sortedTasks = useMemo(() => {
    return sortTasksByName(initialTasks, sortOrder);
  }, [initialTasks, sortOrder]);

  // Toggle sort order
  const toggleSort = () => {
    setSortOrder(prev => prev === 'a-z' ? 'z-a' : 'a-z');
  };

  // Get sort button text
  const getSortButtonText = () => {
    return `Sort by Name (${sortOrder.toUpperCase()})`;
  };


  return {
    tasks: sortedTasks,
    sortOrder,
    toggleSort,
    getSortButtonText,
  };
}