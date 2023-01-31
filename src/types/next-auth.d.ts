import { type DefaultSession } from "next-auth";

interface Profile {
  username: string;
  email: string;
  avatar?: string;
  display_name?: string;
  banner_image?: string;
  allow_follow: boolean;
  profile_visibility: boolean;
  about?: string;
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    user?: {
      id: string;
      profile: Profile;
    } & DefaultSession["user"];
  }
}
