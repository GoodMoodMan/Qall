import { usePathname, useRouter } from "next/navigation"
import Link from 'next/link'
import { BiSearch, BiUser } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import SideNavItem from './SideNavItem'
import ClientWrap from '../../components/ClientWrap'
import ItemFollow from '../../components/ItemFollow'

export default function SideNavMain() {
    const pathname = usePathname();


    return (
        <div id="SideNavMain"
            className={`
            fixed z-20 bg-white- pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
            ${pathname === '/' ? 'lg:w-[300px]' : 'lg:w-[220px]'}
            `}
        >
            <div className="lg:w-full w-[55px] mx-auto">
                <Link href="/">
                    <SideNavItem iconString='For You' colorString={pathname == '/' ? '#F02C56' : ''} sizeString='25' />
                </Link>
                <Link href="/">
                    <SideNavItem iconString='Following' colorString={pathname == '/' ? '#020202' : ''} sizeString='25' />
                </Link>
                <Link href="/">
                    <SideNavItem iconString='LIVE' colorString={pathname == '/' ? '#020202' : ''} sizeString='25' />
                </Link>
                <div className="border-b lg:ml-2 mt-2" />
                <h3 className="lg:block hidden text-xs text-gray-500 font-semibold pt-4">Suggested Accounts</h3>
                <div className="lg:hidden block pt-3" />
                <ClientWrap>
                    <div className="cursor-pointer">
                        <ItemFollow user={{ id: 'Noam Ofir', name: 'Noam Ofir', image: "https://placehold.co/50" }}>

                        </ItemFollow>
                        <ItemFollow user={{ id: 'Nativ Maor', name: 'Nativ Maor', image: "https://placehold.co/50" }}>

                        </ItemFollow>

                    </div>
                </ClientWrap>
                <button className="lg:block hidden text-[#e62929] pt-1.5 pl-2 text-[13px]">
                    See all
                </button>
                {true ? (
                    <div>
                        <div className="border-b lg:ml-2 mt-2" />
                        <h3 className="lg:block hidden text-xs text-gray-500 font-semibold pt-4">Followed accounts</h3>
                        <div className="lg:hidden block pt-3" />
                        <ClientWrap>
                            <div className="cursor-pointer">
                                <ItemFollow user={{ id: 'Noam Ofir', name: 'Noam Ofir', image: "https://placehold.co/50" }}>

                                </ItemFollow>
                                <ItemFollow user={{ id: 'Nativ Maor', name: 'Nativ Maor', image: "https://placehold.co/50" }}>

                                </ItemFollow>

                            </div>
                        </ClientWrap>
                        <button className="lg:block hidden text-[#e62929] pt-1.5 pl-2 text-[13px]">
                            See more
                        </button>

                    </div>) : ('')}
                    <button id="modeToggle">Toggle Mode</button>
                    <div className="lg:block hidden border-b lg:ml-2 mt-2"/>
                    <div className="lg:block hidden text-[11px] text-gray-500">
                        <p className="pt-4 px-2">Qall</p>
                        <p className="pt-4 px-2">All rights reserved</p>

                    </div>

                    

            </div>

        </div>


    )
}


