import React from 'react';

function PostItem({post}) {
  const {title, thumbnailUrl, date, description, postSlug } = post;

  return (
    <a href={`/blog/${postSlug}`}>
      <div className='mb-8 w-full'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default PostItem;