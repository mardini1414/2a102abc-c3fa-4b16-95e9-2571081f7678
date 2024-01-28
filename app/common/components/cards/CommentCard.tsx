import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Comment } from '../../interfaces';

function CommentCard(props: Comment): React.ReactNode {
  return (
    <div className="flex p-3 mb-6">
      <div className="me-3">
        <FontAwesomeIcon
          className="text-gray-400 text-[2rem]"
          icon={faCircleUser}
        />
      </div>
      <div className="flex-1">
        <span className="block mb-2 font-semibold text-sm">
          {props.user.username}
        </span>
        <div className="border rounded p-4">
          <p className="text-sm text-gray-700 leading-relaxed">{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
