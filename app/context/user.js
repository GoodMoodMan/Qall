"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import clientPromise from '../lib/mongodb'

const UserContext = createContext(null);

// const getUser = () => {
//     const router = useRouter();
//     const [user, setUser] = useState(null);
// }

const UserContextProvider = ({children}) => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const checkUser = async () => {
        try {
            const client = await clientPromise;
            const db = client.db("qalltest");
        }
        catch (error) {
            setUser(null);
        }
    }

    return(
        <UserContext.Provider value={{user, register, login, logout, checkUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
export const useUser = () => useContext(UserContext);