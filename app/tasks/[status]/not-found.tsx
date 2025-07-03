import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="max-w-2xl mx-auto py-12 px-4">
            <div className="text-center space-y-6">
                <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                    Status Not Found
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    The task status you&apos;re looking for doesn&apos;t exist. Please check the URL and try again.
                </p>
                <Link href="/tasks" className="btn-primary">
                    View All Tasks
                </Link>
            </div>
        </div>
    );
}