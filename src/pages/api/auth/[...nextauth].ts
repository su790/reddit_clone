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
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        if (session.user?.email) {
          try {
            const profile = await prisma.profile.findUnique({
              where: {
                userId: session.user.email,
              },
            });
            console.log(profile);
            console.log(profile?.username);

            // 👇👇👇👇 getting profile data in session callback
            if (profile) {
              session.user.profile = profile;
              // session.user.profile.username = profile.username;
              // session.user.profile.email = profile.email;
              // session.user.profile.avatar = profile.avatar;
              // session.user.profile.display_name = profile.display_name;
              // session.user.profile.banner_image = profile.banner_image;
              // session.user.profile.profile_visibility =
              //   profile.profile_visibility;
              // session.user.profile.about = profile.about;
            } else {
              console.log("Huge error ");
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
      console.log(session);
      return Promise.resolve(session);
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
    // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  events: {
    async signIn(message) {
      console.log(message);
      if (message.isNewUser === true) {
        await prisma.profile.create({
          data: {
            userId: message.user.id,
            username: await CustomUsername(message.user.email!),
            email: message.user.email!,
          },
        });
      }
    },
  },
};

export default NextAuth(authOptions);
