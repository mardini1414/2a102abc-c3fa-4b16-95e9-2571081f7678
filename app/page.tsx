import React, { Suspense } from 'react';
import PostsView from './common/components/views/PostsView';
import PostViewSkeleton from './common/components/skeletons/PostViewSkeleton';
import SearchForm from './common/components/forms/SearchForm';

async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}): Promise<React.JSX.Element> {
  const query = searchParams?.query || '';

  return (
    <section className="bg-white max-w-[768px] min-h-dvh p-3 mx-auto">
      <SearchForm />
      <Suspense key={query} fallback={<PostViewSkeleton />}>
        <PostsView query={query} />
      </Suspense>
    </section>
  );
}

export default Page;
