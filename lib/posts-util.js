import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(postFile) {
  const postSlug = postFile.replace(/\.mdx$/, '');

  const filePath = path.join(postsDirectory, postFile)
  const fileContent = fs.readFileSync(filePath, 'utf-8')

  const {data, content} = matter(fileContent)

  // console.log('data->', data)
  // console.log('content->', content)

  const postData = {
    postSlug,
    ...data,
    content,
  }

  return postData
}

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile)
  })

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts

}