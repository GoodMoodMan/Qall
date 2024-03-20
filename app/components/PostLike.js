import { useRouter } from "next/navigation";
import { useState } from "react"
import { AiFillHeart } from 'react-icons/ai'
import { BiLoaderCircle } from 'react-icons/bi'
import { FaCommentDots, FaShare } from 'react-icons/fa'


export default function PostLike({ post }) {

    const [hasClickedLike, setHasClickedLike] = useState(false);
    const clickedLike = () => {
        console.log('clicked like');
    }
    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);
    const [userLiked, setUserLiked] = useState(false);

    const router = useRouter();



    return (
        <div id={`PostLike-${post.document_id}`} className='relative mr-[75px]'>
            <div className="flex flex-row justify-center">
                <div className="px-4 text-center flex flex-col">
                    <button disabled={hasClickedLike}
                        onClick={() => { clickedLike() }}
                        className="rounded-full bg-gray-200 p-2 cursor-pointer">
                        {!hasClickedLike ? (<AiFillHeart color={likes.length > 0 && userLiked ? '#ff2266' : ''} size='25' />)
                            :
                            (<BiLoaderCircle className='animate-spin' size='25' />)}
                    </button>
                    <span className="text-xs text-gray-800 font-semibold mt-1">{likes.length}</span>
                </div>
                <button onClick={() => {
                    router.push(`/post/${post.id}/${post.profile.user_id}`)
                }}
                    className="px-4 text-center">
                    <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                        <FaCommentDots size='25' />
                    </div>
                    <span className="text-xs text-gray-800 font-semibold">
                        {comments.length}
                    </span>

                </button>

                <button className="px-4 mb-6 text-center">
                    <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                        <FaShare size='25' />
                    </div>
                </button>

            </div>
        </div>

    )

}