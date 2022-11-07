import React from 'react';
import { getAllPosts } from '../../lib/posts-util';
import PostItem from '../../components/Posts/PostItem';

function Posts(props) {
  return (
    <div>
      <h1 className='font-bold'>Blog</h1>
      <p>You will find here my posts about anything </p>

      {props.posts.map(post => <PostItem post={post} key={post.slug} />)}
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