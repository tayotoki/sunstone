'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { data } = useSession();
  return (
    <main>
      <div className="mb-10">Main page</div>
      <h1>{data?.user?.name}</h1>
      {data?.user?.image && (
        <Image
          src={data?.user?.image}
          alt="user"
          width={48}
          height={48}
          quality={100}
          className="rounded-full"
        />
      )}
      <Link href="/about" className="text-secondary hover:text-primary pr-10">
        About Page
      </Link>
      <Link href="/signin" className="text-secondary hover:text-primary pr-10">
        login
      </Link>
      <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
        Выйти
      </Link>
    </main>
  );
}
