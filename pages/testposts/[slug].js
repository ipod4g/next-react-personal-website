import {getPostData} from "../../lib/posts-util";
import PostContent from "../../components/Posts/PostContent";
import { serialize } from 'next-mdx-remote/serialize'
 

function PostDetailPage(props) {
  return (
    <div>
        <h1>Post details</h1>
        <PostContent post={props.post} content={props.content} />
    </div>
    

  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug)

  const mdxSource = await serialize(postData.content)

  return {
    props: {
      post: postData,
      content: mdxSource
    },
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default PostDetailPage