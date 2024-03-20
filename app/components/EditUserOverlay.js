import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { BiLoaderCircle } from 'react-icons/bi';
import TextInput from '../components/TextInput'
import { Cropper } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css'

export default function EditUserOverlay(props) {
    const router = useRouter();

    

    const [file, setFile] = useState(null);
    const [cropper, setCropper] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [userImage, setUserImage] = useState('https://placehold.co/100');
    const [userName, setUserName] = useState('');
    const [userTags, setUserTags] = useState('');
    const [userBio, setUserBio] = useState('');
    const [uploadedImg, setUploadedImg] = useState(null);
    const [error, setError] = useState(null);

    const getUploadedImg = (event) => {
        if (event.target.files && event.target.files[0]) {
            const uploadedFile = event.target.files[0];
            setFile(uploadedFile);
            setUploadedImg(URL.createObjectURL(uploadedFile));
        }
        else {
            setFile(null);
            setUploadedImg(null);
        }

    }

    const cropAndUpdateImg = () => {
        console.log('cropAndUpdateImg')
    }

    const showError = () => {
        if (error && error.type === 'string' && error.message.length > 0) {
            return error.message
        }
        return '';
    }

    return (
        <div
            id='EditUserOverlay'
            className='fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto'>
            <div className={`relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10
                ${!uploadedImg ? 'h-[655px]' : 'h-[580px]'}`}>
                <div className='absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-gray-300'>
                    <h1 className='text-xl font-medium'>
                        Edit User
                    </h1>
                    <button
                        disabled={isUpdating}
                        onClick={() => props.setShowEdit(false)}
                        className='hover:bg-gray-200 p-1 rounded-full'>
                        <AiOutlineClose size={25} />
                    </button>
                </div>
                <div className={`h-[300px] ${!uploadedImg ? 'mt-16' : 'mt-[58px]'}`}>
                    {!uploadedImg ? (
                        <div>
                            <div className='flex flex-col border-b sm:h-[118px] h-[145px] px-1.5 py-2 w-full'
                                id='UserImgSection'>
                                <h3 className='font-semibold text-lg sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center'>
                                    Profile Photo
                                </h3>

                                <div className='flex items-center justify-center sm:-mt-6'>
                                    <label htmlFor='image' className='relative cursor-pointer'>
                                        <img className='rounded-full' width={95} src={userImage}></img>
                                        <button className='absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px] h-[32px]'>
                                            <BsPencil size={17} className='ml-0.5' />

                                        </button>
                                    </label>
                                    <input type='file' className='hidden' id='image' onChange={getUploadedImg} accept='image/*' />
                                </div>
                            </div>
                            <div id='UserNameSection' className='flex flex-col border-b sm:h-[118px] px-1.5 py-2 mt-1.5 w-full'>
                                <h3 className='font-semibold text-lg sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center'>
                                    Name
                                </h3>
                                <div className='flex items-center justify-center sm:-mt-6'>
                                    <div className='sm:w-[60%] w-full max-w-md'>
                                        <TextInput
                                            string={userName}
                                            placeholder="Username"
                                            onUpdate={setUserName}
                                            inputType="text"
                                            error={showError('userName')} />
                                        <p className={`text-sm relative text-gray-500 ${error ? 'mt-1' : 'mt-4'}`}>
                                            Usernames can only contain letters and numbers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id='UserInfoSection'
                                className='flex flex-col sm:h-[120]px px-1.5 py-2 mt-2 w-full'>
                                <h3 className='font-semibold text-lg sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center'>
                                    Information
                                </h3>
                                <div className='flex items-center justify-center sm:-mt-6'>
                                    <div className='sm:w-[60%] w-full max-w-md'>
                                        <textarea
                                            cols={30}
                                            rows={4}
                                            onChange={e => setUserBio(e.target.value)}
                                            value={userBio || ''}
                                            maxLength={80}
                                            className='resize-none w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none'>

                                        </textarea>
                                        <p className='text-sm text-gray-500'>
                                            {userBio ? userBio.length : 0}/80
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ) : (
                        <div className='w-full max-h-[420px] mx-auto bg-black circle-stencil'>
                            <Cropper
                                stencilProps={{ aspectRatio: 1 }}
                                className='h-[400px]'
                                onChange={(cropper) => setCropper(cropper.getCoordinates())}
                                src={uploadedImg} />
                        </div>
                    )}
                </div>
                <div
                    id='ButtonSection'
                    className='absolute p-5 left-0 bottom-0 border-t border-t-gray-300 w-full'>
                    {!uploadedImg ? (
                        <div id='UpdateInfo' className='flex items-center justify-end'>
                            <button
                                disabled={isUpdating}
                                className='flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100'>
                                    <span className='px-2 font-semibold text-lg'>Cancel</span>
                            </button>

                            <button
                                disabled={isUpdating}
                                className='flex items-center bg-[#F02C56] text-white border rounded-md ml-3 px-3 py-[6px]'>
                                    <span className='px-2 font-semibold text-lg'>
                                        {isUpdating ? <BiLoaderCircle color="#ffffff" className='my-1 mx-2.5 animate-spin'/> : "Save"}
                                    </span>
                            </button>

                        </div>

                    ) : (
                        <div id='CropperButtons' className='flex items-center justify-end'>
                            <button
                                onClick={() => setUploadedImg(null)}
                                className='flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100'>
                                    <span className='px-2 font-semibold text-lg'>Cancel</span>
                            </button>

                            <button
                                onClick={() => cropAndUpdateImg()}
                                className='flex items-center bg-[#F02C56] text-white border rounded-md ml-3 px-3 py-[6px]'>
                                    <span className='px-2 font-semibold text-lg'>
                                        {isUpdating ? <BiLoaderCircle color="#ffffff" className='my-1 mx-2.5 animate-spin'/> : "Apply"}
                                    </span>
                            </button>

                        </div>

                        )}

                </div>
            </div>

        </div>
    )


}