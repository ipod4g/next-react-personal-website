import React from 'react';
import Link from 'next/link';

function PostItem({post}) {
  const {title, thumbnailUrl, date, description, postSlug } = post;

  return (
    <Link href={`/posts/${postSlug}`}>
      <div className='mb-8 w-full'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default PostItem;