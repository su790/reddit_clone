import { type Session } from "next-auth";

export interface PagePropsTypes {
  userData: Session | null;
}
