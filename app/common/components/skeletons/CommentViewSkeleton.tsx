import React from 'react';

function CommentViewSkeleton(): React.ReactNode {
  return (
    <div>
      {[1, 2, 3, 4].map((v) => {
        return (
          <div key={v} className="flex p-3 mb-6 animate-pulse">
            <div className="me-3 h-12 w-12 rounded-full bg-gray-200"></div>
            <div className="flex-1">
              <span className="block mb-2 h-2 w-1/2 rounded-full bg-gray-200"></span>
              <div className="rounded h-12 bg-gray-200"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentViewSkeleton;
