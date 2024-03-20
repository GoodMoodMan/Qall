'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import PostLike from './PostLike'

function PostContent({ post }) {
    if (post.type == 'video') {
        return (
            <><div className='relative flex items-center bg-black rounded-xl cursor-pointer mb-1'>
                <video
                    id={`video-${post.document_id}`}
                    loop
                    controls
                    muted
                    className='rounded-xl object-cover mx-auto h-full'
                    src={post.video_url} />

            </div></>
        );
    }
    if (post.type == 'text') {
        return (
            <p className='relative text-lg mb-4'>
                {post.subtext}
            </p>
        );
    }
}

export default function PostItem({ post }) {

    // useEffect hook to use Intersection Observer API on videos in current page
    // makes sure the ones offscreen don't play
    useEffect(() => {
        const video = document.getElementById(`video-${post.document_id}`);
        const postElement = document.getElementById(`PostItem-${post.document_id}`);

        if (video) {
            let observer = new IntersectionObserver((entries) => {
                entries[0].isIntersecting ? video.play() : video.pause()
            }, { threshold: [0.6] })
            observer.observe(postElement);
        }

    }, [])

    return (
        <div id={`PostItem-${post.document_id}`} className='flex border-b py-6'>
            <div className='cursor-pointer'>
                <img className='rounded-full max-h-[60px]' width='60' src={post.profile.image} />
            </div>
            <div className='pl-3 w-full px-4'>
                <div className='flex items-center justify-between pb-0.5'>
                    <Link href={`/Users/${post.profile.user_id}`}>
                        <span className='font-bold hover:underline cursor-pointer'>
                            {post.profile.name}
                        </span>
                    </Link>
                    <button className='border text-[15px] px-[21px] py-0.5 border-[#F02C56] 
                    text-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md'>
                        Follow
                    </button>
                </div>
                <p className='text-xl pb-0.5 break-words md:max-w-[400px] max-w-[300px]'>
                    {post.text}
                </p>
                <p className='text-[15px] text-gray-400 pb-0.5'>
                    Tags: {post.profile.tags}
                </p>
                <div className='mt-2.5 flex flex-col'>
                    <PostContent post={post}/>
                    <PostLike post={post} />
                </div>
            </div>
        </div>

    )

}