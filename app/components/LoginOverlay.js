'use client';

import React, { useState, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSession, signIn, signOut } from "next-auth/react"
import Register from './Register'
import Login from './Login'

export default function LoginOverlay() {
    const [isRegister, setIsRegister] = useState(false);
    const [show,setShow]=useState(true);


    return (
        <>
            {show ? (<div id='AuthOverlay' 
            className='fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50'
            > 
                <div className='relative bg-white w-full max-w-[470px] h-[70%] p-4 rounded-lg'>
                    <div className='w-full flex justify-end'>
                        <button className='p-1.5 rounded-full bg-gray-200' onClick={()=>setShow(false)}>
                            <AiOutlineClose size={26} />

                        </button>

                    </div>
                    {isRegister ? (
                        <Register/>
                    ) : (
                        <Login/>
                    )}

                </div>

            </div>) :null}
            

        </>
    )

}