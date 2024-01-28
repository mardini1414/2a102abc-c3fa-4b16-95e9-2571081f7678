import React, { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import PostDetailView from '@/app/common/components/views/PostDetailView';
import CommentView from '@/app/common/components/views/CommentView';
import PostDetailViewSkeleton from '@/app/common/components/skeletons/PostDetailViewSkeleton';
import CommentViewSkeleton from '@/app/common/components/skeletons/CommentViewSkeleton';

async function Page({
  params: { id },
}: {
  params: { id: number };
}): Promise<React.JSX.Element> {
  return (
    <section className="bg-white max-w-[768px] min-h-dvh p-3 mx-auto">
      <Link href={'/'} className="block py-2 cursor-pointer w-[1rem]">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="grid grid-cols-1 gap-3">
        <Suspense key={id} fallback={<PostDetailViewSkeleton />}>
          <PostDetailView id={id} />
        </Suspense>
        <Suspense key={id + 1} fallback={<CommentViewSkeleton />}>
          <CommentView id={id} />
        </Suspense>
      </div>
    </section>
  );
}

export default Page;
