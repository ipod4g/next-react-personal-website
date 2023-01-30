import React from 'react';
import PostItem from '../Posts/PostItem';
import Link from 'next/link';


function Blog(props) {

  console.log('props', props)

  return (
    <div>
      <h3 className='text-title uppercase font-bold mb-6'>
        Blog
      </h3>
      <div className='sm:flex flex-wrap justify-between'>
        {props.posts.map(post => <PostItem post={post} key={post.slug} />)}
      </div>

      <Link href="/testposts" className='mt-2'>
        Read more 
      </Link>
      
    </div>
  );
}


export default Blog;