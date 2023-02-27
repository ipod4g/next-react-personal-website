import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PostItem({post}) {
  const {title, thumbnailUrl, date, description, slug } = post;

  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();



  return (
    <Link href={`/testposts/${slug}`}>

      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-6 flex-blog-cards hover:shadow-lg 
        transition-all dark:border-blue"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#a5dff9] to-[#30A9DE]"
        ></span>

        <div class="justify-between sm:flex">
          <div>
            <h3 class="text-xl font-bold text-title dark:text-gray-200">
              {title}
            </h3>
          </div>

        </div>

        <div class="mt-4 sm:pr-8">
          <p class="text-sm text-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>

        <dl class="mt-6 flex justify-between sm:pr-8">
          <div >
            <dd class="text-xs text-gray-500">{createdAt.toDateString()}</dd>
          </div>

          <div class="ml-3 sm:ml-6">
            <dd class="text-xs text-gray-500">{post.minutesToRead} </dd>
          </div>
        </dl>
      </a>

    
      
      {/* <article className='flex-blog-cards mb-6 cursor-pointer rounded-t-lg
      bg-white rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl
      '>

            
     
        <div className='w-full h-44 relative'>
          <Image 
            className='w-full rounded-b'
            src={post.thumbnailUrl}
            alt='portfolio'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div>
          <div className='flex justify-between italic text-xs'>
            <div>
              <p>{post.minutesToRead}</p>
            </div>

            <div>
              <p>{createdAt.toDateString()}</p>
            </div>
          </div>

          <h3 className='text-title'>{title}</h3>
          <p>{description}</p>
        </div>
        {/* <div className='w-full h-44 relative'>
          <Image 
            className='w-full rounded-b'
            src={post.thumbnailUrl}
            alt='portfolio'
            layout='fill'
            objectFit='cover'
          />
        </div> */}
      
        {/* <h4 className='font-bold'>{title}</h4> */}

    
        
        {/* </article> */}
    </Link>
  );
}

export default PostItem;