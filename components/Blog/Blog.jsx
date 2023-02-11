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
        <a className='hover:scale-110 italic inline-block px-3 py-px text-sm rounded cursor-pointer
         border border-black dark:border-white hover:text-white hover:border-white hover:bg-black'>Read more 
        
        </a>
      </Link>
      
    </div>
  );
}


export default Blog;