import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    access_token: string;
    refresh_token: string;
  }

  interface Session {
    error?: 'RefreshAccessTokenError';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string;
    expires_at: number;
    refresh_token: string;
    error?: 'RefreshAccessTokenError';
  }
}
