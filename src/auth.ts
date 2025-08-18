import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthConfig } from 'next-auth';
import { db } from './lib/db';

export const config = {
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(db),
  providers: []
} satisfies NextAuthConfig
export const {handlers, auth, signIn, signOut} = NextAuth(config)
