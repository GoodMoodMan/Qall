"use client";

import { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout'
import PostUser from '../../components/PostUser'
import ClientWrap from '../../components/ClientWrap'
import { BsPencil } from 'react-icons/bs';
import EditUserOverlay from '../../components/EditUserOverlay'
import useGetProfileByUserID from '../../hooks/useGetProfileByUserID'

export default function User({ params }) {


    const [showEdit,setShowEdit] = useState(false);

    const {user, isLoading, isError }= useGetProfileByUserID(params.id);

   
    

   

    if (isLoading) return (<></>)

    const currentUser = user.user
    console.log(user);

    return (
        
        <>
            {showEdit ? (<EditUserOverlay setShowEdit={setShowEdit}/>) : (null)}
            <MainLayout>
                <div className='pt-[90px] ml-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100%-90px)] pr-3 max-w-[1800px] 2xl:mx-auto'>
                    <div className='flex w-[calc(100vw-230px)]'>
                        <ClientWrap>
                            {true ? (
                                <img className='w-[120px] min-w-[120px] rounded-full' src={currentUser.image}></img>
                            ) : (
                                <div className='min-w-[150px] h-[120px] bg-gray-200 rounded-full'></div>
                            )}
                        </ClientWrap>
                        <div className='ml-5 w-full'>
                            <ClientWrap>
                                {currentUser.name ? (
                                    <div>
                                        <p className='text-[30px] font-bold truncate'>{currentUser.name}</p>
                                        <p className='text-[18px] truncate'>{currentUser.name}</p>

                                    </div>
                                ) : (
                                    <div className="h-[60px]"></div>)}
                            </ClientWrap>
                            {true ? (
                                <button onClick={()=>setShowEdit(true)} className='flex item-center rounded-md py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100'>
                                    <BsPencil className='mt-0.5 mr-1' size={18} />
                                    <span>Edit Profile</span>
                                </button>
                            ) : (
                                <button className='flex item-center rounded-md py-1.5 px-8 mt-3 text-[15px] text-white font-semibold bg-[#F02C56]'>
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='flex items-center pt-4'>
                        <div className='mr-4'>
                            <span className='font-bold'>10K</span>
                            <span className='text-gray-500 font-light text-[15px] pl-1.5'>Following</span>
                        </div>
                        <div className='mr-4'>
                            <span className='font-bold'>44K</span>
                            <span className='text-gray-500 font-light text-[15px] pl-1.5'>Following</span>
                        </div>
                    </div>
                    <ClientWrap>
                        <p className='pt-4 mr-4 text-gray-500 font-light text-[15px] pl-1.5 max-w-[500px]'>{currentUser.bio}</p>
                    </ClientWrap>
                    <ul className='w-full flex items-center pt-4 border-b'>
                        <li className='w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black'>Videos</li>
                        <li className='w-60 text-gray-500 text-center py-2 text-[17px] font-semibold'>Likes</li>
                    </ul>
                    <ClientWrap>
                        <div className='mt-4 grid 2xl:grid-cold-6 xl:grid-cols-5 lg:grid-cold-4 md:grid-cols-3 grid-cols-2 gap-3'>
                            <PostUser post={{
                                document_id: '123',
                                user_id: '123',
                                video_url: '/videos/squidward_did_9_11.webm',
                                text: 'this is a post',
                                create_date: '28/12/2023'
                            }}/>
                        </div>
                    </ClientWrap>
                </div>

            </MainLayout>

        </>

    )
}
