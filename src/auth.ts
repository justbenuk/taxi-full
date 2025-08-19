import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthConfig } from 'next-auth';
import { db } from './lib/db';
import { compareSync } from 'bcrypt-ts-edge';
import Credentials from "next-auth/providers/credentials";

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
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        //check to see if there are any credentials
        if (!credentials) return null;

        const user = await db.user.findFirst({
          where: {
            email: credentials.email as string,
          },
          include: {
            groups: true
          }
        });

        //check if the users exits and password matches
        if (
          user?.password &&
          compareSync(credentials.password as string, user.password)
        ) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
            groups: user.groups
          };
        }
        //if above fails
        return null;
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line
    async session({ session, token }: any) {
      //set the user id from the token
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;
      session.user.image = token.image
      session.user.groups = token.groups
      return session;
    },
    // eslint-disable-next-line
    async jwt({ token, user,  }: any) {
      //assign user fields to the token

      if (user) {
        token.id = user.id;
        token.role = user.role as string;
        token.image = user.image as string
        token.groups = user.groups
      }

    
      return token;
    },
    // eslint-disable-next-line
    authorized({ request, auth }: any) {
      //protecting routes
      const protectedPaths = [
        /\/shipping-address/,
        /\/payment-method/,
        /\/place-order/,
        /\/user\/(.*)/,
        /\/order\/(.*)/,
        /\/admin/,
      ];

      //get the pathname from the request url object
      const pathname = request.nextUrl;
      if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;
    },
  },
} satisfies NextAuthConfig
export const {handlers, auth, signIn, signOut} = NextAuth(config)
