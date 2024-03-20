
import NextAuth from "next-auth"

import clientPromise from "./app/lib/mongodb"
import authConfig from "./auth.config"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: {strategy: 'jwt'},
    ...authConfig,

  
})




export async function getUserByEmail(email) {
    try {
        console.log("got here");
        const client = await clientPromise; // Wait for the MongoDB client to connect
        const db = client.db('qalltest'); // Access the database
        const collection = db.collection('User');
        
        const user = await collection.findOne({ email: email });
        return user; // Returns the user object if found, otherwise null
    } catch (error) {
        throw new Error('Error fetching user by email');
    }
}


// export const config = {
//     theme: {
//         logo: "https://next-auth.js.org/img/logo/logo-sm.png",
//     },
//     session: {
//         strategy: 'jwt',
//         maxAge: 1 * 24 * 60 * 60, // 1 day
//     },

//     providers: [
//         CredentialsProvider({
//             // The name to display on the sign in form (e.g. 'Sign in with...')
//             name: 'Credentials',
//             // The credentials is used to generate a suitable form on the sign in page.
//             // You can specify whatever fields you are expecting to be submitted.
//             // e.g. domain, username, password, 2FA token, etc.
//             // You can pass any HTML attribute to the <input> tag through the object.
//             credentials: {
//                 email: { label: 'Email', type: 'email' },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials, req) {
//                 // You need to provide your own logic here that takes the credentials
//                 // submitted and returns either a object representing a user or value
//                 // that is false/null if the credentials are invalid.
//                 // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//                 // You can also use the `req` object to obtain additional parameters
//                 // (i.e., the request IP address)
                
//                 const user = await getUserByEmail(email, passwordHash)
//                 if (user && bcrypt.compareSync(password, user.passwordHash)) {
//                     return { id: user.id, name: user.name, email: user.email }
//                 } else {
//                     throw new Error('Invalid credentials')
//                 }
//             }
//         })
//     ],

//     callbacks: {
//         authorized({ request, auth }) {
//             const { pathname } = request.nextUrl
//             if (pathname === "/middleware-example") return !!auth
//             return true
//         },
//     },
// }

// export const { handlers, auth, signIn, signOut } = NextAuth(config)