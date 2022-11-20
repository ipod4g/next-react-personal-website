import React from 'react';
import PostItem from '../Posts/PostItem';
import Link from 'next/link';


function HomeBlog(props) {

  return (
    <div>
      <h3 className='text-title uppercase font-bold mb-6'>
        Recent Articles
      </h3>
      <div className='sm:flex flex-wrap justify-between'>
        {props.posts.map(post => <PostItem post={post} key={post.slug} />)}
      </div>

      <Link href="/posts" className='mt-2'>
        Read more 
      </Link>

      {/* <a className='w-full'>
        <h1>{posts[0].title}</h1>
      </a> */}
    </div>
  );
}


export default HomeBlog;