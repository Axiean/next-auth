// src/types/next-auth.d.ts
import NextAuth, { DefaultSession, Profile } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * The `Session` interface is what you'll see on the client-side.
   */
  interface Session {
    user: {
      roles?: string[];
    } & DefaultSession["user"];
  }

  /**
   * The `Profile` interface is what you get back from the OAuth provider.
   * We are adding our custom claim to it.
   */
  interface Profile {
    ["https://myapp.com/roles"]?: string[];
  }
}

declare module "next-auth/jwt" {
  /**
   * The `JWT` interface is what is stored in the JWT token itself.
   */
  interface JWT {
    roles?: string[];
  }
}
