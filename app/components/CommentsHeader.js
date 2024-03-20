'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { BiLoaderCircle } from "react-icons/bi"
import { BsChatDots, BsTrash3 } from "react-icons/bs"
import { ImMusic } from "react-icons/im"
import ClientWrap from "./ClientWrap"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

export default function CommentsHeader({ post, params }) {

    const router = useRouter

    const [hasLiked, setHasLiked] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [userLiked, setUserLiked] = useState(false);

    const deletePost = () => {
        console.log('delete post');
    }

    const likePost = () => {
        console.log('liked post')
    }



    return (
        <>
            <div className="flex items-center justify-between px-8">
                <div className="flex items-center">
                    <Link
                        href={`/profile/${post.user_id}`}>
                        {post.profile.image ? (
                            <img className="rounded-full lg:mx-0 mx-auto" width={40} src={post.profile.image} />
                        ) : (
                            <div className="w-[40px] h-[40px] bg-gray-200 rounded-full">

                            </div>
                        )}
                    </Link>
                    <div className="ml-3 pt-0.5">
                        <Link
                            href={`/profile/${post.user_id}`}
                            className="relative z-10 text-lg font-semibold hover:underline">
                            {post.profile.name}
                        </Link>
                        <div className="relative z-0 text-sm -mt-5 font-light">
                            {post.profile.name}
                            <span className="relative -top-0.5 text-3xl pl-1 pr-0.5">.</span>
                            <span className="font-base">{post.create_date}</span>
                        </div>
                    </div>
                </div>

                {true ? (
                    <div>
                        {isDeleting ?
                            <BiLoaderCircle className="animate-spin" size={25} />
                            :
                            <button disabled={isDeleting} onClick={() => deletePost()}>
                                <BsTrash3 className="cursor-pointer" size={25} />
                            </button>}
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <p className="px-8 mt-4 text-sm">{post.text}</p>
            <div className="flex items-center px-8 mt-8">
                <ClientWrap>
                    <div className="text-center pb-4 flex items-center">
                        <button
                            className="rounded-full bg-gray-200 p-2 cursor-pointer"
                            disabled={hasLiked}
                            onClick={() => likePost()}>
                                {hasLiked ? (
                                    <AiFillHeart size={25}/>
                                ) : (
                                    <AiOutlineHeart size={25}/>
                                )}
                        </button>
                        <span className="text-xs pl-2 pr-4 text-gray-800 font-semibold">
                            123
                        </span>
                    </div>
                </ClientWrap>
                <div className="pb-4 text-center flex items-center">
                    <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                        <BsChatDots size={25}/>
                    </div>
                    <span className="text-xs pl-2 text-gray-800 font-semibold">
                        4
                    </span>

                </div>

            </div>
           
        </>
    )

}