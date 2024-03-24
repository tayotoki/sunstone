import NextUIProvider from '@/components/NextUIProvider';
import SessionProvider from '@/components/SessionProvider';
import { authOptions } from '@/config/nextAuth';
import { getServerSession } from 'next-auth';

export async function Providers({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <SessionProvider session={session}>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
