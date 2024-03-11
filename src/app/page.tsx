import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/logo_48.svg" alt="logo" width={48} height={48} />
      <div>Main page</div>
    </main>
  );
}
