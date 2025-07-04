import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/utils/cn';

interface TaskErrorProps {
    message: string;
    className?: string;
}

export function TaskError({ message, className }: TaskErrorProps) {
    return (
        <Alert
            variant="destructive"
            className={cn('my-8', className)}
            role="alert"
            aria-live="assertive"
            aria-label="Error occurred while loading tasks"
        >
            <AlertTriangle className="h-5 w-5 text-red-600" aria-hidden="true" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
}