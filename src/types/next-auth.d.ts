import { type DefaultSession } from "next-auth";

interface Profile {
  username: string;
  email: string;
  avatar?: string | null;
  display_name?: string | null;
  banner_image?: string | null;
  allow_follow: boolean;
  profile_visibility: boolean;
  about?: string | null;
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
