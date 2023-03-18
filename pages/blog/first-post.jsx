import React, {useEffect, useState} from 'react';
import { db, postToJSON } from '../../pages/api/firebase-config';
import { collection, getDoc, getDocs, doc, where, query, updateDoc, ref } from 'firebase/firestore';
import { HeartButton } from '../../components/shared/HeartButton';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Link from 'next/link';


async function getIP(){
  const response = await fetch('http://api.ipify.org/?format=json');
  const data = await response.json();
  return data;
}


function Post(props) {
  const [userIp, setUserIp] = useState('some-user-ip')
  const { path } = props

  const getUserIp = async () => {
    const userIp = await getIP().then(data => data.ip);

    setUserIp(userIp)
  }

  useEffect(() => {
    getUserIp()
  }, [])


  // if it is auto-generated id
  // const docRef = doc(db, "posts", props.post.id);

  const docRef = doc(db, path);

  const [realtimePost] = useDocumentData(docRef);

  const post = realtimePost || props.post;
  const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();
  const heartCount = post.heartCount

  return (
    <div className='relative mt-12'>
        <Link href="/blog">
            <button type="button" aria-label="Go back to articles" 
                className="group mb-8 flex h-8 w-8 items-center justify-center rounded-full 
                bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 
                transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 
                dark:ring-white/10 dark:hover:border-title-dark dark:hover:ring-white/20 
                lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:-left-20 xl:mt-4">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-title-dark"><path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            </button>
        </Link>
        
      {/* <aside className='sticky h-4 w-full top-36 ml-[-100px]'>
      <div className=''>
        <HeartButton  postRef={docRef} userIp={userIp} path={path} heartCount={heartCount} />
      </div>
      </aside> */}
      <article> 
      <div className='border-l-[2px] flex justify-between items-end'>
				<div className='ml-3'>
					<time datetime="2022-09-05" class="flex items-center text-gray-500 text-sm">
						<span >{createdAt.toDateString()}</span>
					</time>

					<p className='text-sm text-gray-500 '>{post.minutesToRead} • 5,834 views</p>
				</div>
				<div className='h-[26px]'>
					<HeartButton  postRef={docRef} userIp={userIp} path={path} heartCount={heartCount} />
				</div>

			</div>
        <h1 className='mt-6 font-bold text-2xl md:text-3xl tracking-tight mb-4 text-title dark:text-gray-200'>{post.title}</h1>
        {/* <p>
          {post.author} / {createdAt.toDateString()}
        </p> */}

        {/* <div>{post.minutesToRead}</div>
        <h2>{post.heartCount}</h2> */}
        {/* <h2>{post.description}</h2>
        <h2>{post.id}</h2> */}

        <p>FRIST POST TEXT Many people make New Year's resolutions, 
            but they often fail because they are too ambitious or because people lose 
            motivation when they don't see results right away. </p>

        <p>Sooo, pouring a coffee and let’s do it</p>

        <img src="/images/chatgpt/924451.png" alt="" />

{/* ## Finish what you started

Finishing what you start is an essential ingredient for success. It doesn't matter if it's a large project or a small task, learning to complete what you have started can help you become more productive and successful.

It's important to remember that completing projects isn't just about getting them done, it's about taking pride in your work and achieving a sense of accomplishment. When you finish something that you've started, no matter how big or small, it gives you a boost of confidence and motivation to take on the next challenge.

By developing the habit of finishing what you start, not only will your productivity increase but so will your ability to achieve success in all areas of life.

## Practice new technologies

As the world is rapidly changing, it's important to stay up-to-date with the latest technologies and trends. Sounds crazy but AI is everywhere, (chatGPT ),  blockchain technology, IoT, Extended Reality
soo, this year a personal roadmap for myself to practice new technologies and expand my knowledge. 

I plan on taking online courses, attending webinars and conferences, reading books and articles about new technologies, and connecting with industry professionals who can help me understand how these technologies are being used in the real world. Additionally, I will be creating projects that utilize these new technologies so that I can gain hands-on experience.

By taking this approach, I hope to become an expert in the latest technologies by the end of this year.

## Developing the product mindset

Developing a product mindset is essential for anyone who wants to succeed in the business world. It involves understanding the product, its features and benefits, and how to use it to its fullest potential. Reading is one of the best ways to develop a product mindset. By reading books, blogs, and articles related to your industry, you can gain insights into different aspects of the product that you didn't know before. You can also learn about new strategies and techniques that can help you improve your products or services. Reading also helps you stay up-to-date with industry trends and changes so that you can make better decisions when it comes to developing your products. With a strong product mindset, you will be able to build successful products that meet customer needs and generate profits for your company.</p> */}


    
      </article>
      
        

        
    </div>
  );
}

export default Post;


// export const getStaticPaths = async () => {
//   const postsColectionRef = await getDocs(collection(db, 'posts'))

//   const paths = postsColectionRef.docs.map(entry => ({
//     params: {
//       slug: entry.data().slug
//     }
//   }));
//   return {
//     paths,
//     fallback: true
//   }
// }

export const getStaticProps = async (context) => {
//   const { slug } = context.params;
	const slug = 'first-post'

  const postsRef = collection(db, "posts");
  const q = query(postsRef, where("slug", "==", slug));

  const querySnapshot = await getDocs(q);

  let post;
  let postT

  querySnapshot.forEach((doc) => {
    post = postToJSON(doc)
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });



  const postRef = doc(db, `posts/${slug}`)

  const path = postRef.path

  return {
    props: { post, path, slug }
  }

}