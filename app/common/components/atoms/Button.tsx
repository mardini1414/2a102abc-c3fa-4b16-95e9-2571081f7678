'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { ButtonProps } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Button(props: ButtonProps): React.ReactNode {
  const { label, icon } = props;
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          className="bg-purple-300 flex justify-center items-center gap-2 rounded px-8 py-3.5 text-white"
          type="submit"
        >
          <FontAwesomeIcon
            className="animate-spin"
            width={20}
            icon={faSpinner}
          />
        </button>
      ) : (
        <button
          className="bg-purple-500 flex justify-center items-center gap-2 rounded px-4 py-2 text-white"
          type="submit"
        >
          {icon}
          {label}
        </button>
      )}
    </>
  );
}

export default Button;
