

import React from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import ClientWrap from './ClientWrap';


// THIS NEED TO HAVE TYPE STATE AND RETURN BASED ON POST TYPE
// VIDEO ONLY

export default function PostContainer({post, params}) {

    const loopPostsUp = () => {
        console.log('loop posts up');
    }

    const loopPostsDown = () => {
        console.log('loop posts down')
    }



    return (
        <div className='w-full h-screen bg-black'>
                <div className='w-full h-full relative'>
                    <Link
                        href={`profile/${params.userID}`}
                        className='absolute text-white z-20 m-5 bg-gray-700 p-1.5 hover:bg-gray-800'>
                        <AiOutlineClose size={27} />

                    </Link>
                    <div>
                        <button onClick={() => loopPostsUp()}
                            className='absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800'>
                            <BiChevronUp size={30} color='#ffffff' />
                        </button>
                        <button onClick={() => loopPostsDown()}
                            className='absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800'>
                            <BiChevronDown size={30} color='#ffffff' />
                        </button>

                    </div>
                    <ClientWrap>
                        <div className='bg-black bg-opacity-70 lg:min-w-[480px] z-10 relative'>
                            {post.video_url ? (
                                <div>
                                    <video
                                        autoPlay
                                        controls
                                        loop
                                        muted
                                        className='h-screen mx-auto'
                                        src='/videos/squidward_did_9_11.webm' />
                                </div>
                            ) : (
                                <></>)}

                        </div>
                    </ClientWrap>
                </div>

            </div>
    )

}