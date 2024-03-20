// import authConfig from "./auth.config"
// import NextAuth from "next-auth"


export default function() {
    
}


// export default auth((req) => {
//     const { nextUrl } = req;
//     const isLoggedIn = !!req.auth;
//     console.log(isLoggedIn);
// })

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}