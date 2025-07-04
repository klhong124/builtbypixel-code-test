import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/utils/cn';

interface TaskErrorProps {
    message: string;
    className?: string;
}

export function TaskError({ message, className }: TaskErrorProps) {
    return (
        <Alert variant="destructive" className={cn('my-8', className)}>
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
}