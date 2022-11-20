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