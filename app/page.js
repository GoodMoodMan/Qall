
import Image from 'next/image'
import MainLayout from './layouts/MainLayout';
import ClientWrap from './components/ClientWrap';
import PostItem from './components/PostItem';

export default function Home() {
  return (
    <MainLayout>
      <div className='mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto'>
        <ClientWrap>
          {/* example post */}
          <PostItem post={
            {document_id: '123',
            user_id: '456',
            video_url: '/videos/squidward_did_9_11.webm',
            text: 'this is the actual truth',
            create_date: '25/12/2023',
            profile: {user_id:'456',name: 'Nativ Maor', image: 'https://placehold.co/100'},
            type: 'video'}}/>
          {/* example post */}
          <PostItem post={
            {document_id: '1234',
            user_id: '456',
            
            text: 'Question Test',
            create_date: '25/12/2023',
            profile: {user_id:'456',name: 'Noam Ofir', image: 'https://placehold.co/100'},
            type: 'text',
            subtext: 'This is the content of the question'}}/>
        </ClientWrap>
      </div>
    </MainLayout>
  )
}
