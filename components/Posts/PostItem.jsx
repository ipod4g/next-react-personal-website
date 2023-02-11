import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PostItem({post}) {
  const {title, thumbnailUrl, date, description, slug } = post;

  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();

  console.log('post----jvdklv ', post)



  return (
    <Link href={`/testposts/${slug}`}>
      <article className='flex-blog-cards mb-6 cursor-pointer rounded-t-lg shadow-2xl'>
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
        <div className='w-full h-44 relative'>
          <Image 
            className='w-full rounded-b'
            src={post.thumbnailUrl}
            alt='portfolio'
            layout='fill'
            objectFit='cover'
          />
        </div>
      
        {/* <h4 className='font-bold'>{title}</h4> */}
        
      </article>
    </Link>
  );
}

export default PostItem;