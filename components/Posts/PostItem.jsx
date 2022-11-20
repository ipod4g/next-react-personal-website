import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function PostItem({post}) {
  const {title, thumbnailUrl, date, description, postSlug } = post;

  return (
    <Link href={`/posts/${postSlug}`}>
      <article className='flex-blog-cards py-6 px-4 border-2 mb-6 cursor-pointer rounded-md hover:shadow-md'>
        <div className='w-full h-44 relative mb-2'>
          <Image 
            className='w-full'
            src={post.thumbnailUrl}
            alt='portfolio'
            layout='fill'
            objectFit='contain'
          />
        </div>
      
        <h4 className='font-bold'>{title}</h4>
        <p>{description}</p>
      </article>
    </Link>
  );
}

export default PostItem;