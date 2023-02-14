import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PostItem({post}) {
  const {title, thumbnailUrl, date, description, slug } = post;

  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  console.log('post----jvdklv ', post)



  return (
    <Link href={`/testposts/${slug}`}>

      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-6 flex-blog-cards hover:shadow-lg 
        transition-all "
      >
        <span
          class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="justify-between sm:flex">
          <div>
            <h3 class="text-xl font-bold text-gray-900">
              {title}
            </h3>
          </div>

        </div>

        <div class="mt-4 sm:pr-8">
          <p class="text-sm text-gray-500">
            {description}
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque. */}
          </p>
        </div>

        <dl class="mt-6 flex">
          <div class="flex flex-col-reverse">
            <dd class="text-xs text-gray-500">{createdAt.toDateString()}</dd>
          </div>

          <div class="ml-3 flex flex-col-reverse sm:ml-6">
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