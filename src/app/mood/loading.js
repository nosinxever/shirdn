// Loading.js
import React from 'react';

import { Skeleton } from "@/components/ui/skeleton"


const LoadingSkeleton = () => (

    <div className="mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4 w-full md:w-96">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <Skeleton  className="w-12 h-12 rounded-full"  />
          <div>
          <Skeleton className="h-5 w-[80px]" />
          <Skeleton className="h-5 w-[80px]" />
          </div>
        </div>
        <Skeleton className="h-4 w-[50px]" />
      </div>
      <div className="mt-2">
      <Skeleton className="h-8 w-[300px]" />
      </div>
      <div className="flex justify-end items-center mt-4">
        <div className="flex items-center">
          <button className="flex mr-2 text-gray-400 hover:text-red-600 transition-colors">
          <Skeleton className="h-4 w-[20px]" />
          </button>
          <button className="flex items-center ml-5 text-gray-400 hover:text-blue-600 transition-colors">
          <Skeleton className="h-4 w-[20px]" />
          </button>
        </div>
      </div>
    </div>
);







export default function Loading() {
    return (
        <div className="mx-3">
            <div className="flex flex-col items-center justify-center py-2">
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
            </div>
        </div>
    );
}

