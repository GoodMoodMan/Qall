'use server'


import { auth, signIn, signOut } from "./../auth";
import {AuthError} from "next-auth";


export async function login(email, password) {
    'use server'
    console.log('ok')
    try {
        let msg = await auth();
        console.log(msg);
        await signIn("credentials", {
            email,
            password,
            redirectTo: '/'})
        msg = await auth();
        console.log(msg);
        
        
    } catch (error) {
        
        if (error instanceof AuthError) {
            
            switch (error.type) {
                case 'CredentialsSignin':
                  return {error:'Invalid credentials.'}
                default:
                  return {error:'Something went wrong.'}
              }
        }
        throw error;
    }
}

export async function logout() {
    'use server'
    console.log('logout')
    try {
        await signOut();    
    } catch (error) {
        
        
        throw error;
    }
}
