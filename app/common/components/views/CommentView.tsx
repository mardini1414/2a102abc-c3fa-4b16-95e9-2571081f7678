import React from 'react';
import { getCommentByPostId } from '../../actions';
import CommentCard from '../cards/CommentCard';
import CommentForm from '../forms/CommentForm';
import { Comment } from '../../interfaces';

async function CommentView({ id }: { id: number }): Promise<React.JSX.Element> {
  const data = await getCommentByPostId(id);
  return (
    <>
      {!!data?.comments ? (
        <div>
          {data?.comments.map((comment: Comment) => {
            return <CommentCard key={comment.id} {...comment} />;
          })}
        </div>
      ) : (
        ''
      )}
      {!!data?.comments && <CommentForm id={id} />}
    </>
  );
}

export default CommentView;
