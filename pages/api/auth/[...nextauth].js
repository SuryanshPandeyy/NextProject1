import { MongoClient } from "mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import Providers from "next-auth/providers";
import clientPromise from "/lib/mongodb";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  secret: "yBEbxG7/mEQ/MBr4zPmBF3F0krxtA6L86072HqYsFDg=",
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        let client;
        const connectionString = process.env.MONGODB_URI;
        client = await MongoClient.connect(connectionString);
        const db = client.db(process.env.MONGODB_DB);

        const collection = db.collection("admin");
        const user = await collection.findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("error");
        }
        client.close();
        return { email: user.email };
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
