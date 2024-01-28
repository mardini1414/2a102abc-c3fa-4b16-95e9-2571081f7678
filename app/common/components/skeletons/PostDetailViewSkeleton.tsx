import React from 'react';

function PostDetailViewSkeleton(): React.ReactNode {
  return (
    <div className="border p-4 rounded-md border-gray-400 shadow">
      <div className="animate-pulse">
        <header className="mb-4 font-semibold rounded-full h-4 bg-gray-200 w-2/3"></header>
        <div className="text-base leading-relaxed rounded-xl bg-gray-200 h-[200px]"></div>
        <div>
          <div className="py-4">
            <div className="mt-2 flex gap-2">
              {[1, 2, 3].map((v: number) => {
                return (
                  <div
                    key={v}
                    className="bg-gray-200 h-3 rounded-full w-10"
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-200 h-4 w-5 rounded-md"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetailViewSkeleton;
