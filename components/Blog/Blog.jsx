import React from 'react';
import PostItem from '../Posts/PostItem';
import Link from 'next/link';


function Blog(props) {

  console.log('props', props)

  return (
    <div>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-title dark:text-white'>
        Blog
      </h3>
      <div className='sm:flex flex-wrap justify-between'>
        {props.posts.map(post => <PostItem post={post} key={post.slug} />)}
      </div>

      <Link href="/testposts">
        <a className='mt-6 hover:scale-105 italic inline-block px-3 py-px text-xs rounded cursor-pointer border dark:border-white '>Read more 
        
        </a>
      </Link>
      
    </div>
  );
}


export default Blog;