import React from 'react';
import { getAllPosts } from '../../lib/posts-util';
import PostItem from '../../components/Posts/PostItem';

function Posts(props) {
  return (
    <div>
      <h1 className='font-bold'>Articles</h1>
      <p>You will find here my posts about anything </p>

      <div className='sm:flex flex-wrap justify-between'>
        {props.posts.map(post => 
          <PostItem post={post} key={post.slug} />)
        }
      </div>

      
    </div>
  );
}



export function getStaticProps() {
  const allPosts = getAllPosts()

  return{
    props: {
      posts: allPosts
    }
  }
}

export default Posts;