import NextAuth from "next-auth";

import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log(req.nextUrl.pathname)
    console.log(isLoggedIn)
})

// the below RegExp represents, the above 
// middleware will only be invoked when the matcher matches
export const config = {
    matcher: [
        // Exclude files in the _next directory, which are Next.js internals.
        "/((?!.+\\.[\\w]+$|_next).*)", "/",
        // Re-include any files in the api or trpc folders that might have an extension
        "/(api|trpc)(.*)"
    ]
}