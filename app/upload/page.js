"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import UploadLayout from '../layouts/UploadLayout'
import { BiSolidCloudUpload, BiLoaderCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { PiKnifeLight } from 'react-icons/pi'

export default function Upload() {
    const router = useRouter();

    const [fileDisplay, setFileDisplay] = useState('');
    const [caption, setCaption] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const onChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const fileUrl = URL.createObjectURL(file);
            setFileDisplay(fileUrl);
            setFile(file);
        }
    }

    const clearVideo = () => {
        setFileDisplay('');
        setFile(null);
    }

    const discard = () => {
        setFileDisplay('');
        setFile(null);
        setCaption('');
    }

    const createPost = () => {
        console.log('createPost');
    }

    return (
        <>
            <UploadLayout>
                <div className='w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4 '>
                    <div>
                        <h1 className='text-xl font-semibold'>Upload Post</h1>
                        <h2 className='text-gray-400 text-sm mt-1'>Make sure to add the appropriate tags</h2>
                    </div>
                    <div className='mt-4 flex justify-center flex-col md:flex-row '>
                        {!fileDisplay ? (
                            <label htmlFor='fileInput'
                                className='md:mx-6 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] text-center p-3 border-2
                                border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer h-[400px]'>
                                <BiSolidCloudUpload size='40' color='#b3b3b1' />
                                <p className='mt-4 text-lg'>Select a video to upload</p>
                                <p className='mt-1.5 text-md text-gray-500'>Or drag and drop a file</p>
                                <p className='mt-12 text-sm text-gray-400'>MP4</p>
                                <p className='mt-2 text-sm text-gray-400'>Less than 2GB</p>
                                <label htmlFor='fileInput' className='px-2 py-1.5 mt-8 text-white text-lg w-[80%] bg-[#F02C56] rounded-sm cursor-pointer'>
                                    Select file
                                </label>
                                <input type='file' id='fileInput' onChange={onChange} hidden accept='video/*'></input>

                            </label>) : (
                            <div className='md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center  
                            p-3 rounded-2xl cursor-pointer relative'>
                                {isUploading ? (<div className='absolute flex items-center justify-center z-20 bg-black h-full w-full rounded-[50px] bg-opacity-50'>
                                    <div className='mx-auto flex items-center justify-center gap-1'>
                                        <BiLoaderCircle className='animate-spin' color='#F12B56' size={30} />
                                        <div className='text-white font-bold'>Uploading..</div>
                                    </div>

                                </div>) : (null)}
                                <div className='flex items-center justify-center'>
                                    <video
                                        controls
                                        autoPlay
                                        loop
                                        muted
                                        className='h-[50vh] md:h-[40vh] rounded-2xl object-cover z-10 p-3' src={fileDisplay}></video>
                                    <div className='absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300'>
                                        <div className='flex items-center justify-center truncate'>
                                            <AiOutlineCheckCircle size={18} className='min-w-[16px]' />
                                            <p className='text-lg font-semibold pl-1 truncate text-ellipsis'>{file ? file.name : ''}</p>
                                        </div>
                                        <button onClick={() => clearVideo()} className='text-md ml-2 font-semibold'>
                                            Change
                                        </button>

                                    </div>

                                </div>

                            </div>)}
                        <div className='mt-4 mb-6'>
                            <div className='flex bg-[#F8F8F8] py-4 mx-1 px-4'>
                                <div>
                                    <PiKnifeLight className='mr-4' size='20' />
                                </div>
                                <div>
                                    <div className='text-semibold text-xl mb-1.5'>
                                        Divide videos and edit
                                    </div>
                                    <div className='text-semibold text-md text-gray-400'>
                                        You can quickly divide videos into multiple parts,
                                        remove redundant parts and turn landscape videos into portrait videos.
                                    </div>
                                </div>
                                <div className='flex justify-end max-w-[130px] w-full h-full text-center my-auto'>
                                    <button className='px-7 py-1.5 text-white text-md bg-[#F02C56] rounded-sm ml-2'>Edit</button>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className='flex items-center justify-between px-7'>
                                    <div className='mb-1 text-md'>Text</div>
                                    <div className='text-gray-400 text-sm'>{caption.length}/500</div>
                                </div>
                                <textarea maxLength={500} type='text' className='w-full border p-2.5 rounded-md focus:outline-none ml-0 md:ml-2 resize-none'
                                value={caption || ''} onChange={event => {setCaption(event.target.value)}}/>
                            </div>
                            <div className='flex'>
                                <button disabled={isUploading} onClick={() => {discard()}}
                                className='border text-lg hover:bg-gray-100 rounded-sm px-10 py-2.5 mt-8 ml-6'>
                                    Discard
                                </button>
                                <button disabled={isUploading} onClick={() => {createPost()}}
                                className='border text-lg text-white bg-[#F02C56] rounded-sm px-10 py-2.5 mt-8 ml-6'>
                                    {isUploading ? <BiLoaderCircle className='animate-spin' color='#ffffff' size={25}/> : 'Post'}
                                </button>
                            </div>
                            {error ? (
                            <div className='text-red-600 mt-4'>
                                {error.message}
                            </div>) : (null)}
                        </div>

                    </div>

                </div>
            </UploadLayout>
        </>

    )
}
