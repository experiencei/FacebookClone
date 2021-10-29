import NextAuth from "next-auth";
import providers from "next-auth/providers";


export default NextAuth({

    providers: [
        providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ]
})



