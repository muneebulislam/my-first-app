'use client'; // Error components must be Client Components
import Link from 'next/link';
import { useEffect } from 'react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div>
      <p>{error.message||"could not get the users"}</p>
      <br/>
      <br/>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <br/>
      <br/>
      <Link href="/users">Go back to Users</Link>
    </div>
  );
}