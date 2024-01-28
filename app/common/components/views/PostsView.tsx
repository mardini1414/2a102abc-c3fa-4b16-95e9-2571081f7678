import React from 'react';
import { Post } from '../../interfaces';
import PostCard from '../cards/PostCard';
import { getPost } from '../../actions';
import DataEmptyView from './DataEmptyView';

async function PostsView({
  query,
}: {
  query: string;
}): Promise<React.JSX.Element> {
  const data = await getPost(query);
  return (
    <>
      {data?.posts?.length > 1 ? (
        <div className="grid grid-cols-2 gap-3">
          {data.posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <DataEmptyView />
      )}
    </>
  );
}

export default PostsView;
