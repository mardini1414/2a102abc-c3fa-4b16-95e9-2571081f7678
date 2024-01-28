import React from 'react';
import Link from 'next/link';

function Navbar(): React.ReactNode {
  return (
    <header className="bg-purple-500 text-white p-4 flex">
      <Link href={'/'}>
        <div className="font-semibold text-lg">Submission App</div>
      </Link>
    </header>
  );
}

export default Navbar;
