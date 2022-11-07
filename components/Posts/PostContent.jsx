import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';
import Button from '../shared/Button'

const components = { SyntaxHighlighter };

function PostContent(props) {
  const { content } = props
  const { title } = props.post

  return (
    <div>
      <h1>{props.post.title}</h1>
      <MDXRemote {...content} components={{ Button, SyntaxHighlighter }} />
    </div>
  );
}

PostContent.propTypes = {
  content: PropTypes.string,
};

PostContent.defaultProps = {
  content: '',
}

export default PostContent;




// import ReactMarkdown from "react-markdown"
// import PostHeader from "./PostHeader";
// import classes from './PostContent.module.css';
// import Image from 'next/image';

// const dummyPost = {
//   slug: 'slug-image1',
//   title: "Title some",
//   image: 'slug-image1.jpeg',
//   excerpt: 'cnjbhdvjsdvbds  jgvbr hv ',
//   date: '2022-02-10',
//   content: '# This is a first post'
// }

// function PostContent(props) {
//   const {title, content, slug, image} = props.post;
//   const { post } = props;
//   const imagePath  = `/images/posts/${slug}/${image}`;

//   const customImage = {
//     // img: (image) => {
//     //   return (
//     //     <Image
//     //       src={image.src}
//     //       alt={image.alt}
//     //       width={400}
//     //       height={600}
//     //     />
//     //   )
//     // },
//     p: (paragraph) => {
//       const { node } = paragraph;

//       if (node.children[0].tagName === "img") {
//         const image = node.children[0];

//         return (
//           <Image
//             src={image.properties.src}
//             alt={image.properties.alt}
//             width={400}
//             height={600}
//           />
//         )
//       }
//       return <p>{paragraph.children}</p>
//     },
//   }

//   return(
//     <article className={classes.content}>
//       <PostHeader title={title} image={imagePath} />
//       <ReactMarkdown components={customImage}>{content}</ReactMarkdown>
//     </article>
//   )
// }

// export default PostContent