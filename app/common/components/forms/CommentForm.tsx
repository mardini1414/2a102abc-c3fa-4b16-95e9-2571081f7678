'use client';
import React from 'react';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Input from '../atoms/Input';
import { addComment } from '../../actions';
import { useFormState } from 'react-dom';
import CommentCard from '../cards/CommentCard';

function CommentForm({ id }: { id: number }): React.ReactNode {
  const [state, action] = useFormState(addComment, { message: '' });
  return (
    <>
      {!!state.id && <CommentCard {...state} />}
      <form action={action} className="flex gap-3">
        <div className="w-full">
          <Input type="hidden" defaultValue={id} name="postId" />
          <Input type="text" name="body" placholder="Enter comment" />
          {state.message && <div className="text-red-500">{state.message}</div>}
        </div>
        <div>
          <Button
            icon={
              <FontAwesomeIcon
                width={20}
                className="text-white"
                icon={faPaperPlane}
              />
            }
            label="Send"
          />
        </div>
      </form>
    </>
  );
}

export default CommentForm;
