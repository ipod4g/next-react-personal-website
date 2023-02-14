import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/shared/Navigation'
import MainInfo from '../components/MainInfo/MainInfo'
import HomeBlog from '../components/HomeBlog/HomeBlog'
import Blog from '../components/Blog/Blog'
// import {getAllPosts} from '../lib/posts-util'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Projects from './Projects'

import { db } from '../pages/api/firebase-config';
import { collection, getDocs} from 'firebase/firestore';
import { postToJSON } from '../pages/api/firebase-config';

function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <MainInfo />

      <Experience />
      <Projects />
      

      <Blog posts={props.posts} />


      {/* <div className='flex'>

      <article
  class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>

  <div class=" bg-white p-4 !pt-20 sm:p-6">

    <time datetime="2022-10-10" class="block text-xs text-gray-500">
      10th Oct 2022
    </time>

    <a href="#">
      <h3 class="mt-0.5 text-lg font-medium text-gray-900">
        How to center an element using JavaScript and jQuery
      </h3>
    </a>

    <div class="mt-4 flex flex-wrap gap-1">
      <span
        class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        Snippet
      </span>

      <span
        class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        JavaScript
      </span>
    </div>
  </div>
</article>


<article
  class="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>

  <div class=" bg-white p-4 !pt-20 sm:p-6">
    <time datetime="2022-10-10" class="block text-xs text-gray-500">
      10th Oct 2022
    </time>

    <a href="#">
      <h3 class="mt-0.5 text-lg font-medium text-gray-900">
        How to center an element using JavaScript and jQuery
      </h3>
    </a>

    <div class="mt-4 flex flex-wrap gap-1">
      <span
        class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        Snippet
      </span>

      <span
        class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        JavaScript
      </span>
    </div>
  </div>
</article>

</div> */}


{/* <div className='flex justify-between'>

<a
  href="#"
  class="relative block overflow-hidden rounded-lg border border-gray-100 p-8 flex-blog-cards transition hover:shadow-lg"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="justify-between sm:flex">
    <div>
      <h3 class="text-xl font-bold text-gray-900">
        Building a SaaS product as a software developer
      </h3>

      <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
    </div>


  </div>

  <div class="mt-4 sm:pr-8">
    <p class="text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl class="mt-6 flex">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Published</dt>
      <dd class="text-xs text-gray-500">31st June, 2021</dd>
    </div>

    <div class="ml-3 flex flex-col-reverse sm:ml-6">
      <dt class="text-sm font-medium text-gray-600">Reading time</dt>
      <dd class="text-xs text-gray-500">3 minute</dd>
    </div>
  </dl>
</a>



<a
  href="#"
  class="relative block overflow-hidden rounded-lg border border-gray-100 p-8 flex-blog-cards transition hover:shadow-lg"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="justify-between sm:flex">
    <div>
      <h3 class="text-xl font-bold text-gray-900">
        Building a SaaS product as a software developer
      </h3>

      <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
    </div>

  </div>

  <div class="mt-4 sm:pr-8">
    <p class="text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl class="mt-6 flex">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Published</dt>
      <dd class="text-xs text-gray-500">31st June, 2021</dd>
    </div>

    <div class="ml-3 flex flex-col-reverse sm:ml-6">
      <dt class="text-sm font-medium text-gray-600">Reading time</dt>
      <dd class="text-xs text-gray-500">3 minute</dd>
    </div>
  </dl>
</a>

</div> */}


      {/* <HomeBlog posts={props.posts} /> */}
      

      <Contact />
      
    </div>
  )
}

export async function getServerSideProps(context)  {
  const postsColectionRef = await getDocs(collection(db, 'posts'))
  const posts = postsColectionRef.docs.map(postToJSON)

  // const posts = postsColectionRef.map(data => ({
    // id: data.id,
    // ...data.data()
  // }))

  return {
    props: { posts }
  }
}

// export function getStaticProps() {
  
//   const allPosts = getAllPosts();

//   return {
//     props: {
//       posts: allPosts
//     }
//   }
// }

export default Home
