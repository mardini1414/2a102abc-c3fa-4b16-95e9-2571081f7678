import React from 'react';
import { getPostById } from '../../actions';
import PostCard from '../cards/PostCard';
import DataEmptyView from './DataEmptyView';

async function PostDetailView({ id }: { id: number }) {
  const post = await getPostById(id);
  return (
    <>
      {!!post.id ? (
        <div>
          <PostCard detail post={post} />
        </div>
      ) : (
        <DataEmptyView />
      )}
    </>
  );
}

export default PostDetailView;
