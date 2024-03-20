
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "./app/data/user";

export default {
  providers: [
    Credentials({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            
            
            
            const user = await getUserByEmail(credentials.email)
            if (!user || !user.password) return null

            // use bcrypt to compare hashes later (no hash now)
            if (user.password === credentials.password) return user

            return null
            
            }
        
        }
  )],
    }


