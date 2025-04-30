
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-vit-blue dark:text-blue-400">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We couldn't find the page you're looking for. The page might have been moved or deleted.
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link to="/dashboard">Return to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
