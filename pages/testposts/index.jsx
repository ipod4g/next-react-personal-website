import React from 'react';
import { db } from '../../pages/api/firebase-config';
import { collection, getDocs} from 'firebase/firestore';
import Link from 'next/link';
import { HeartButton } from '../../components/shared/HeartButton';
import { postToJSON } from '../../pages/api/firebase-config';

function Posts(props) {
  const {posts} = props
  return (
    <div>
      <h1>Test posts from firebase</h1>
      {posts.map(post => {
        return (
          <Link href={`/testposts/${post.slug}`} key={post.id}>
            <div>
              <h1>{post.title}</h1>
              <h2>{post.description}</h2>
            </div>
          </Link>
        )
      })}
    </div>
  );
}


export async function getServerSideProps(context)  {
  const postsColectionRef = await getDocs(collection(db, 'posts'))
  const posts = postsColectionRef.docs.map(postToJSON)

  // const posts = postsColectionRef.map(data => ({
    // id: data.id,
    // ...data.data()
  // }))

  return {
    props: {posts}
  }
}

export default Posts;