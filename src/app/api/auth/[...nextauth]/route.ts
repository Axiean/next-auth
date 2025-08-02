import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
      issuer: process.env.AUTH0_ISSUER as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (profile) {
        const roles = profile["https://myapp.com/roles"];
        if (roles) {
          token.roles = roles;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.roles) {
        session.user.roles = token.roles;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
