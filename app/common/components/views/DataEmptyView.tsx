import React from 'react';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DataEmptyView(): React.ReactNode {
  return (
    <div className="w-full grid place-content-center h-[400px]">
      <div className="text-center">
        <FontAwesomeIcon className="text-gray-400" size="2x" icon={faInbox} />
        <h5 className="text-gray-400">Data Empty</h5>
      </div>
    </div>
  );
}

export default DataEmptyView;
