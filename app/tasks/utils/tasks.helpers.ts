import { EnumTaskStatus, Task, Maybe } from '@/.codegen/schema';
import { format } from 'date-fns';

export type SortOrder = 'a-z' | 'z-a';

export function sortTasksByName(tasks: Task[], order: SortOrder = 'a-z'): Task[] {
  return [...tasks].sort((a, b) => {
    // Trim whitespace and normalize text for better sorting
    const titleA = a.title.trim().toLowerCase();
    const titleB = b.title.trim().toLowerCase();
    const comparison = titleA.localeCompare(titleB);
    return order === 'a-z' ? comparison : -comparison;
  });
}


export function formatDate(dateString: string): string {
  return format(new Date(dateString), 'dd MMM yyyy');
}


export function getStatusLabel(status: Maybe<EnumTaskStatus> |string | undefined): string {
  const normalizedStatus = normalizeStatus(status ?? '');
  switch (normalizedStatus) {
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
  if (Object.values(EnumTaskStatus).includes(upperStatus as EnumTaskStatus)) {
    return upperStatus as EnumTaskStatus;
  }
  return null;
}


// Status options for navigation
export const STATUS_OPTIONS = [
  { value: 'all' as const, label: 'All Tasks', path: '/tasks' },
  { value: EnumTaskStatus.New, label: 'New', path: '/tasks/new' },
  { value: EnumTaskStatus.OfferAccepted, label: 'Offer Accepted', path: '/tasks/offer_accepted' },
  { value: EnumTaskStatus.Completed, label: 'Completed', path: '/tasks/completed' },
] as const;

// Page title helpers
export function getPageTitle(status?: string): string {
  if (!status) return 'Task Management';
  return `${getStatusLabel(status)} Tasks`;
}

export function getLoadingText(status?: string): string {
  if (!status) return 'Loading tasks...';
  return `Loading ${getStatusLabel(status).toLowerCase()} tasks...`;
}

// Error message helpers
export function getErrorMessage(status?: string): string {
  if (!status) return 'Failed to load tasks. Please try again later.';
  return `Failed to load tasks for status: ${getStatusLabel(status)}. Please try again later.`;
}
