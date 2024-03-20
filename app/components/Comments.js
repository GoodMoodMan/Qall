
import { useState } from "react"
import ClientWrap from "./ClientWrap"
import SingleComment from './SingleComment'
import { BiLoaderCircle } from "react-icons/bi";

export default function Comments({ post, params }) {

    const [comment, setComment] = useState('');
    const [inputFocus, setInputFocus] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const addComment = () => {
        console.log('added comment');
    }

    const postComments = [{
        document_id: '123',
        user_id: '456',
        post_id: '987',
        text: 'this is a comment text',
        create_date: '31/12/2023',
        profile: { user_id: '456', name: 'Nativ Maor', image: 'https://placehold.co/100' },
    },
    {
        document_id: '123',
        user_id: '456',
        post_id: '987',
        text: 'dude above me is right',
        create_date: '31/12/2023',
        profile: { user_id: '456', name: 'Nativ Maor', image: 'https://placehold.co/100' },
    },
    {
        document_id: '123',
        user_id: '456',
        post_id: '987',
        text: 'yeah I can agree with that',
        create_date: '31/12/2023',
        profile: { user_id: '456', name: 'Nativ Maor', image: 'https://placehold.co/100' },
    }]

    return (
        <>

            <div id="Comments"
                className="relative bg-[#f0f0f0] z-0 w-full max-h-[calc(100%-315px)] border-t-2 pb-8">
                <div className="pt-2" />
                <ClientWrap>
                    {!postComments ? (
                        <div className="text-center mt-6 text-xl text-gray-500">
                            No comments.
                        </div>

                    ) : (
                        <div>
                            {postComments.map((comment, index) =>
                                <SingleComment key={index} comment={comment} />
                            )}
                        </div>
                    )}

                </ClientWrap>
                
                
                

            </div >
            <div id="createComment" 
                className="absolute flex items-center justify-between botton-0 bg-white
                h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2 ">
                    <div className={`bg-[#f0f0f0] flex items-center rounded-lg w-full lg:mx-w-[420px]
                        ${inputFocus ? 'border-2 border-gray-400' : 'border-2 border-[#f0f0f0]'}`} >
                            <input 
                                onFocus={() => setInputFocus(true)}
                                onBlur={() => setInputFocus(false)}
                                onChange={(e) => setComment(e.target.value)}
                                value={comment || ''}
                                className="bg-[#f0f0f0] text-sm focus:outline-none w-full  lg:max-w-[420px] p-2 rounded-lg"
                                type="text"
                                placeholder="Add comment"/>

                    </div>
                    {!isUploading ? (
                        <button disabled={!comment} onClick={() => addComment()}
                        className={`font-semibold text-sm ml-5 pr-1
                        ${comment ? 'text-[#F02C56] cursor-pointer' : 'text-gray-400'}`}>
                            Post
                        </button>

                    ) : (
                        <BiLoaderCircle className="animate-spin" color="#E91E62"  size={20}/>
                    )}

            </div>


        </>
    )

}