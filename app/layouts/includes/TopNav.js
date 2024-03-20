import { usePathname, useRouter } from "next/navigation"
import Link from 'next/link'
import { BiSearch, BiUser } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

export default function TopNav() {
    const router = useRouter()
    const pathname = usePathname()

    const handleSearchName = (event) => {
        console.log(event.target.value);
    }

    const goTo = (location) => {
        console.log('ok');
        window.location.href = location;
        
    }

    const openLoginOverlay= ()=>{

    }

    const isLoggedIn = false;

    return (

        <div id="TopNav" className="fixed bg-white z-30 flex items-center w-full border-b h-[60px]">
            <div className={`flex items-center justify-between gap-6 w-full px-4 mx-auto ${pathname === '/' ? 'max-w-[1150px]' : ''}`}>
                <Link href="/">
                    <img className="object-contain h-24" src="/images/Qall.jpeg" />
                </Link>
                <div className="relative hidden md:flex items-center justify-end bg-[#f1f1f2] p-1 rounded-full max-w-[430px] w-full">
                    <input
                        type="text"
                        onChange={handleSearchName}
                        className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
                        placeholder="Search accounts"
                    />
    {/* 
                    <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">

                        <div className="p-1">
                            <Link
                                href={`/Users/Nativ%20Maor`}
                                className="flex items-center justify-between w-full cursor-pointer hover:bg-[#F12B56] p-1 px-2 hover:text-white">
                                <div className="flex items-center">
                                    <img className="rounded-md" width="40" src="https://placehold.co/40" />
                                    <div className="truncate ml-2">Nativ Maor</div>
                                </div>
                            </Link>
                            <Link
                                href={`/Users/Nativ%20Maor`}
                                className="flex items-center justify-between w-full cursor-pointer hover:bg-[#F12B56] p-1 px-2 hover:text-white">
                                <div className="flex items-center">
                                    <img className="rounded-md" width="40" src="https://placehold.co/40" />
                                    <div className="truncate ml-2">Nativ Maor</div>
                                </div>
                            </Link>

                        </div>

                    </div>
    */}
                    <div className="px-3 py-1 flex items-center border-l border-l-gray-300">
                        <BiSearch color="#A1A2A7" size="22" />
                    </div>

                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => goTo("upload")}
                        className="flex items-center border rounded-sm py-[6px] hover:bg-gray-100 pl-1.5">
                        <AiOutlinePlus color="#000000" size="22" />
                        <span className="px-2 font-medium text-[15px]">Upload</span>
                    </button>
                    {!isLoggedIn ? (
                        <div className="flex items-center">
                            <button className="flex items-center rounded-md bg-[#3742dd] text-white border px-3 py-[6px]" onClick={()=>openLoginOverlay()}>
                                <span className="whitespace-nowrap mx-4 font-medium text-[15px]">Log In</span>
                            </button>
                            <BsThreeDotsVertical color="#161724" size="25" />
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <div className="relative">
                                <button className="mt-1 border-gray-200 rounded-full">
                                    <img className="rounded-full w-[35px] h-[35px]" src="https://placehold.co/40"/>
                                </button>
                                <div className="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[40px] right-0">
                                    <button className="flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer">
                                        <BiUser size="20"/>
                                        <span className="pl-2 font-semibold text-sm">Profile</span>

                                    </button>
                                    <button className="flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer">
                                        <FiLogOut size="20"/>
                                        <span className="pl-2 font-semibold text-sm">Log Out</span>

                                    </button>
                                

                                </div>
                            
                            </div>
                        </div>

                    )}
                    

                </div>
            </div>
        </div>

    )
}