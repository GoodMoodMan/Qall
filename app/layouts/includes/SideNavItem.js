'use client';

import React, {useEffect, useState} from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { RiGroupLine } from 'react-icons/ri';
import { BsCameraVideo } from 'react-icons/bs';

export default function SideNavItem({iconString, colorString, sizeString}) {

    const icon = () => {
        if (iconString == 'For You') return <AiOutlineHome color={colorString} size={sizeString} />
        if (iconString == 'Following') return <RiGroupLine color={colorString} size={sizeString} />
        if (iconString == 'LIVE') return <BsCameraVideo color={colorString} size={sizeString} />
    }
    
    return (
        <div className='w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md'>
            <div className='flex items-center lg:mx-0 mx-auto'>
                {icon()}
                <p className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[16px] text-[${colorString}]`}>
                    {iconString}
                </p>
            </div>
        </div>
    
    )

}