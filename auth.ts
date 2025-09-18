import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  }),Google],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    session({ session, user }) {
      // You can extend the session object here if needed
      return session;
    },
  },
});
