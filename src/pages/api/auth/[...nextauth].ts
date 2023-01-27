import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import CustomUsername from "@/src/helpers/createUsername";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),

    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
  pages: {
    signIn: "/login",
    newUser: "/welcome", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  events: {
    async signIn(message) {
      console.log(message);
      if (message.isNewUser === true) {
        await prisma.profile.create({
          data: {
            userId: message.user.id!,
            username: await CustomUsername(message.user.email!),
            email: message.user.email!,
          },
        });
      }
    },
  },
};

export default NextAuth(authOptions);
