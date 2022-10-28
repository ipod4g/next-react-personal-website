import React from 'react';
import PostItem from '../Posts/PostItem';


function HomeBlog(props) {

  return (
    <div>
      <h3>Recent Blog</h3>
      {props.posts.map(post => <PostItem post={post} key={post.slug} />)}

      {/* <a className='w-full'>
        <h1>{posts[0].title}</h1>
      </a> */}
    </div>
  );
}


export default HomeBlog;