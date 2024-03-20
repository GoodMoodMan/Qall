'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import TopNav from './includes/TopNav';
import SideNavMain from './includes/SideNavMain'

export default function MainLayout({ children }) {

  const pathname = usePathname();



  return (
    <div >
      <TopNav></TopNav>
      <div className={`flex justify-between py-4 mx-auto w-full lg:px-2.5 px-0 ${pathname == '/' ? 'max-w-[1140px]' : ""}`}>
        <SideNavMain></SideNavMain>
        {children}
      </div>
    </div>
  )
}
