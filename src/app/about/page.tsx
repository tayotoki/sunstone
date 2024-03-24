import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
      <p>About Page</p>
      <Link
        href="/signin"
        className="text-secondary hover:text-primary transition font-semibold text-large"
      >
        Login
      </Link>
    </div>
  );
}
