import React from 'react';
import { db } from '../api/firebase-config';
import { collection, getDocs} from 'firebase/firestore';
import Link from 'next/link';
import { HeartButton } from '../../components/shared/HeartButton';
import { postToJSON } from '../api/firebase-config';
import PostItem from '../../components/Posts/PostItem';

function Posts(props) {
  const {posts} = props
  return (
    <div>
      <h2 className='font-bold text-2xl md:text-3xl tracking-tight mb-6 mt-2 text-title dark:text-gray-200'>Blog</h2>
      
      <div className='sm:flex flex-wrap justify-between'>
        {posts.map(post => {
          return (
            <PostItem post={post} key={post.slug} />
          )
        })}
      </div>
    </div>
  );
}


export async function getServerSideProps(context)  {
  const postsColectionRef = await getDocs(collection(db, 'posts'))
  const posts = postsColectionRef.docs.map(postToJSON)

  return {
    props: {posts}
  }
}

export default Posts;