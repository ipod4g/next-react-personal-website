import React, {useEffect, useState} from 'react';
import { db, postToJSON } from '../../pages/api/firebase-config';
import { collection, getDoc, getDocs, doc, where, query, updateDoc, ref } from 'firebase/firestore';
import { HeartButton } from '../../components/shared/HeartButton';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Link from 'next/link';
import { motion, useScroll, useSpring } from "framer-motion";


async function getIP(){
  const response = await fetch('http://api.ipify.org/?format=json');
  const data = await response.json();
  return data;
}


function Post(props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      <motion.div className="max-w-2xl mx-auto fixed top-20 h-2.5 left-0 right-0 bg-red-400 origin-top-left" style={{ scaleX }} />

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

        <img src="/images/chatgpt/924450.png" className='mb-6' alt="" />
      <article className='prose'> 
        <p className='text-gray-700 dark:text-gray-300'> At the beginning of 2023, the chatbot developed by <a className='text-blue' href="https://openai.com/">OpenAI</a> has been 
          a widely discussed topic in the tech industry. 
          Everybody starts testing and experimenting with it therefore, it quickly became a trending topic around the world 🌎. 
        </p>

        <p className='text-gray-700 dark:text-gray-300'>

          I tried it as well, I must say that this AI technology is revolutionary 🚀. 
          It has the ability to generate conversational text, provide answers to any question, and even write code for you 🤯. 
        
        </p> 
        <p> Making this technology a part of my daily life seems like a wonderful idea because it can improve my productivity and efficiency 💻,
           helps generate new ideas 💡, and automate repetitive tasks 🔄.
        </p>

        <h2>Setting up CodeGPT on VSCode</h2>

        <p className='text-gray-700 dark:text-gray-300'>
          To set up ChatGPT on VSCode, we are required to install an extension. However, the commonly used extension for ChatGPT has been deprecated.
        </p>

        <figure className=''>
        <img src="/images/chatgpt/chatGPt-deprecated.png" alt="" />
        <figcaption>you can read more about it here 
          <div className='not-prose inline-block'>
            <a href="https://github.com/gencay/vscode-chatgpt/issues/239">
            <img className='h-4 w-4 inline-block mx-2 align-[-0.15em]' src="/images/chatgpt/github-icon.png" alt="" />
              <span className='border-none text-links underline'>Issues 239 </span>
            </a>
          </div>
            
        </figcaption>

        </figure>

        <p>Therefore, in VScode, go to the extensions section and search for "Genie AI." Once you find it, click on "install".</p>
        
        <img src="/images/chatgpt/genie-ai.png" alt="" />

        <p>
        When you installed it, you highlight any part of your code click the right button on a mouse and you will see this section there
        </p>

        <img src="/images/chatgpt/genie-ai-list.png" alt="" />

        <p>
        After clicking on any of these blocks, you will need to enter your OpenAI API key in the pop-up box shown in the image below.
        </p>

        <img src="/images/chatgpt/genie-api-key.png" alt="" />

        <h2>Generate OpenAI API key</h2>

        <p>
        You can easily generate your 
        OpenAI API key by visiting the OpenAI website <br />
        <a className='text-blue' href="https://beta.openai.com/account/api-keys"> OpenAI Api key</a>  and following the instructions provided.
        </p>

        <p>
        Once you have generated your <code className='bg-gray-100 rounded px-0.5 py-0.5'>api key</code>, you can enter it in the pop-up box shown in the image above and start working with this extension.

        </p> 


        <img src="/images/chatgpt/generate-api.png" alt="" />

        <p>
          Now that you have entered your OpenAI API key, you can start taking advantage of the powerful features offered by ChatGPT.
        </p>

        <h3>Here are the things you can do with ChatGPT: </h3>

        <ul className='font-medium'>
          <li>Ask questions 🙋</li>
          <li>Find bugs, refactor code, optimize ⚡️</li>
          <li>Add comments to the code, tests 🗒️</li>
          <li>Find problems in your code 🔍</li>
        </ul>

        <p>You can read more information about this extension <a className='text-blue' href="https://marketplace.visualstudio.com/items?itemName=genieai.chatgpt-vscode">here</a>  
        </p>

        <p>
        Except for ChatGPT, there are many other useful extensions 
        available for Visual Studio Code that can boost your productivity, explore the capabilities of AI technology,
         or simply have a conversation with a chatbot. 
         <br />
          To explore other available extensions, you can browse the <a className='text-blue' href="https://marketplace.visualstudio.com/vscode"> Visual Studio Code Marketplace.</a>
           
        </p>
    
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