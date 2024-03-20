'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import { AiOutlineCheck } from 'react-icons/ai';

export default function ItemFollow({user}) {
    
    
    return (
        <Link href={`/users/1`} 
        className='flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2'>
            <img className='rounded-full lg:mx-0 mx-auto' width="35" src={user.image}/>
            <div className='lg:pl-2.5 lg:block hidden'>
                <div className='flex items-center'>
                    <p className='font-bold text-[14px] truncate'>
                        {user.name}
                    </p>
                    <p className='ml-1 rounded-full bg-[#58D5EB] h-[14px] relative'>
                        <AiOutlineCheck className='relative p-[3px]' color='#FFFFFF' size='15'/>
                    </p>
                </div>
                <p className='font-light text-[12px] text-gray-500'>
                    {user.name}
                </p>
            </div>
        </Link>
    
    )

}