import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { PostCardProps } from '@/app/common/interfaces';
import Link from 'next/link';
import truncate from '@/utils/truncate';

function PostCard(props: PostCardProps): React.ReactNode {
  const { post, detail } = props;
  return (
    <Link href={'/posts/' + post?.id}>
      <div className="border p-4 rounded-md border-gray-400 shadow">
        <header className="mb-4 font-semibold text-sm">{post?.title}</header>
        <div className="text-sm leading-relaxed text-gray-700">
          {!!detail ? post?.body : truncate(post?.body ?? '', 80)}
        </div>
        <div>
          <div className="py-4">
            <div className="mt-2 flex gap-2">
              {post?.tags.map((tag: string, i) => {
                return (
                  <div
                    key={i}
                    className="bg-purple-100 text-purple-500 w-min text-xs px-2 rounded-full"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-4">
              <FontAwesomeIcon className="text-red-500" icon={faHeart} />
            </div>
            <span className="ml-2">{post?.reactions}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
