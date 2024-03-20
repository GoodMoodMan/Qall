"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import PostContainer from '../../../components/PostContainer'
import CommentsHeader from '../../../components/CommentsHeader'
import ClientWrap from '../../../components/ClientWrap';
import Comments from '../../../components/Comments'


export default function Post(props) {

    const router = useRouter();

    const examplePost = {
        document_id: '123',
        user_id: '456',
        video_url: '/videos/squidward_did_9_11.webm',
        text: 'this is the actual truth',
        create_date: '25/12/2023',
        profile: { user_id: '456', name: 'Nativ Maor', image: 'https://placehold.co/100' },
        type: 'video'
    }



    return (
        <>
            <div id='PostPage' className='lg:flex justify-between w-full h-screen bg-black overflow-auto'>
                <PostContainer post={examplePost} params={props} />
                <div id='InfoSection' className='lg:max-w-[550px] relative w-full h-full bg-white'>
                    <div className='py-7' />
                    <ClientWrap>
                        {examplePost.video_url ? (
                            <CommentsHeader post={examplePost} params={props} />
                        ) : (
                            <></>
                        )}
                    </ClientWrap>
                    <Comments post={examplePost} />

                </div>
            </div>

        </>
    )
}
