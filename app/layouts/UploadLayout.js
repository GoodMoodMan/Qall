import React from 'react';
import { usePathname } from 'next/navigation';
import TopNav from './includes/TopNav';

export default function UploadLayout({ children }) {

 
  return (
    <div className='bg-[#fcfcfc] h-[100vh]'>
      <TopNav/>
      <div className='flex justify-between mx-auto w-full px-2'>
        {children}
      </div>

    </div>
  )
}
