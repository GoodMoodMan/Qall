import React, { useState } from 'react'
import Link from "next/link";
import { BiLoaderCircle } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';




export default function SingleComment({ comment, params }) {

    const [isDeleting, setIsDeleting] = useState(false);

    const deleteComment = () => {
        let res = confirm('Delete this comment?');
        if (!res) return
        else {
            //delete comment do later
        }

    }

    return (
        <div id={`comment-${comment.post_id}-${comment.document_id}`}
            className="flex items-center justify-between px-8 mt-4">

            <div className="flex items-center relative w-full">
                <Link href={`/profile/${comment.profile.user_id}`}>
                    <img className="absolute top-0 rounded-full lg:mx-0 mx-auto"
                        width={40}
                        src={comment.profile.image} />
                </Link>
                <div className="ml-14 pt-0.5 w-full">
                    <div className="text-lg font-semibold flex items-center justify-between">
                        <span className="flex items-center">
                            {comment.profile.name}
                            <span className="text-xs text-gray-600 font-light ml-1 mt-1">
                                {comment.create_date}
                            </span>
                        </span>
                        {true ? (
                            <button disabled={isDeleting}
                                onClick={() => deleteComment()}>
                                {isDeleting ? <BiLoaderCircle className='animate-spin' color='#E91E62' size={20} /> :
                                    <BsTrash className='cursor-pointer' size={25} />}

                            </button>

                        ) : (
                            <></>
                        )}
                    </div>
                    <p className='text-base font-light'>{comment.text}</p>
                </div>

            </div>

        </div>
    )

}