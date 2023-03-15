import React from 'react';
import PostItem from '../Posts/PostItem';
import Link from 'next/link';


function Blog(props) {

  console.log('props', props)

  return (
    <div>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-title dark:text-gray-200'>
        Blog
      </h3>
      <div className='sm:flex flex-wrap justify-between'>
        {props.posts.map(post => <PostItem post={post} key={post.slug} />)}
      </div>

      <Link href="/blog">
      <a
        class="inline-block mt-6 rounded bg-gradient-to-r from-[#a5dff9] to-[#30A9DE] p-[2px]
         hover:text-white focus:outline-none focus:ring active:text-opacity-75"
      >
        <span
          class="block italic rounded bg-white px-3 py-px text-sm hover:bg-transparent
           text-gray-700 hover:text-white dark:text-white dark:bg-navigation hover:bg-gradient-to-r hover:from-[#a5dff9] hover:to-[#30A9DE]"
        >
          Read more
        </span>
      </a>
        {/* <a className='mt-6 hover:scale-105 c inline-block px-3 py-px text-xs rounded cursor-pointer border dark:border-white '>Read more 
        
        </a> */}
      </Link>
      
    </div>
  );
}


export default Blog;