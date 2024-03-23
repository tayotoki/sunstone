import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [GoogleProvider],
});
