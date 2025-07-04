import { EnumTaskStatus, Task, SortFindManyTaskInput } from '@/.codegen/schema';

export type SortOrder = 'asc' | 'desc';

// Note: This function is kept for potential client-side sorting if needed
// but server-side sorting is now preferred
export function sortTasksByName(tasks: Task[], order: SortOrder = 'asc'): Task[] {
  return [...tasks].sort((a, b) => {
    const comparison = a.title.localeCompare(b.title);
    return order === 'asc' ? comparison : -comparison;
  });
}

export function filterTasksByStatus(tasks: Task[], status: EnumTaskStatus): Task[] {
  return tasks.filter(task => task.status === status);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function getStatusColor(status: EnumTaskStatus | undefined): string {
  switch (status) {
    case EnumTaskStatus.New:
      return 'blue';
    case EnumTaskStatus.OfferAccepted:
      return 'yellow';
    case EnumTaskStatus.Completed:
      return 'green';
    default:
      return 'gray';
  }
}

export function getStatusLabel(status: EnumTaskStatus | undefined): string {
  switch (status) {
    case EnumTaskStatus.New:
      return 'New';
    case EnumTaskStatus.OfferAccepted:
      return 'Offer Accepted';
    case EnumTaskStatus.Completed:
      return 'Completed';
    default:
      return 'Unknown';
  }
}

// Status validation and normalization
export const VALID_STATUSES: EnumTaskStatus[] = [
  EnumTaskStatus.New,
  EnumTaskStatus.OfferAccepted,
  EnumTaskStatus.Completed
];

export function normalizeStatus(status: string): EnumTaskStatus | null {
  const upperStatus = status.toUpperCase();
  if (upperStatus === 'OFFER_ACCEPTED') {
    return EnumTaskStatus.OfferAccepted;
  }
  if (upperStatus === 'NEW') {
    return EnumTaskStatus.New;
  }
  if (upperStatus === 'COMPLETED') {
    return EnumTaskStatus.Completed;
  }
  return null;
}

export function isValidStatus(status: string): boolean {
  return normalizeStatus(status) !== null;
}

// Status options for navigation
export const STATUS_OPTIONS = [
  { value: 'all' as const, label: 'All Tasks', path: '/tasks' },
  { value: EnumTaskStatus.New, label: 'New', path: '/tasks/new' },
  { value: EnumTaskStatus.OfferAccepted, label: 'Offer Accepted', path: '/tasks/offer_accepted' },
  { value: EnumTaskStatus.Completed, label: 'Completed', path: '/tasks/completed' },
] as const;

// Page title helpers
export function getPageTitle(status?: EnumTaskStatus): string {
  if (!status) return 'Task Management';
  return `${getStatusLabel(status)} Tasks`;
}

export function getLoadingText(status?: EnumTaskStatus): string {
  if (!status) return 'Loading tasks...';
  return `Loading ${getStatusLabel(status).toLowerCase()} tasks...`;
}

// Error message helpers
export function getErrorMessage(status?: EnumTaskStatus): string {
  if (!status) return 'Failed to load tasks. Please try again later.';
  return `Failed to load tasks for status: ${status}. Please try again later.`;
}

// Task count helpers
export function getTaskCountText(count: number): string {
  return `${count} task${count !== 1 ? 's' : ''} found`;
}

// Sort order helpers
export function getSortButtonText(order: SortFindManyTaskInput): string {
  return `Sort by ID (${order === SortFindManyTaskInput.IdAsc ? 'A-Z' : 'Z-A'})`;
}

export function toggleSortOrder(currentOrder: SortFindManyTaskInput): SortFindManyTaskInput {
  return currentOrder === SortFindManyTaskInput.IdAsc
    ? SortFindManyTaskInput.IdDesc
    : SortFindManyTaskInput.IdAsc;
}