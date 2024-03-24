import { NextAuthOptions, TokenSet } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      id: 'CredentialsSignIn',
      name: 'CredentialsSignIn',
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'OlegSkarednov',
          email: 'olegskar1@gmail.com',
          access_token: 'access',
          refresh_token: 'refresh',
        };
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        if (
          credentials.email === user.email &&
          credentials.password === 'Detroit313'
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log(token);
      session.error = token.error;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};
