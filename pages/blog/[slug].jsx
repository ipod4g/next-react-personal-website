import React, {useEffect, useState} from 'react';
import { db, postToJSON } from '../../pages/api/firebase-config';
import { collection, getDoc, getDocs, doc, where, query, updateDoc, ref } from 'firebase/firestore';
import { HeartButton } from '../../components/shared/HeartButton';
import { useDocumentData } from 'react-firebase-hooks/firestore';


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
    <div className='relative'>
      <aside className='sticky h-4 w-full top-36 ml-[-100px]'>
      <div className=''>
        <HeartButton  postRef={docRef} userIp={userIp} path={path} heartCount={heartCount} />
      </div>
      </aside>
      <article> 
      <h1 className='font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white'>{post.title}</h1>
        <p>
          {post.author} / {createdAt.toDateString()}
        </p>

        {/* <div>{post.minutesToRead}</div>
        <h2>{post.heartCount}</h2> */}
        {/* <h2>{post.description}</h2>
        <h2>{post.id}</h2> */}

        <p>Many people make New Year's resolutions, but they often fail because they are too ambitious or because people lose motivation when they don't see results right away. Additionally, resolutions may lack specificity or be too general to be effective. People may also not have a clear plan for how to reach their goals, or they may lack the resources or support they need to succeed.

when you start something, the first and most crucial  

Writing New year's resolutions is quite popular and people often do it but the difficult part is how to follow through on them. From my point of view creating a roadmap extremely helpful tool, it helps you stay on track, check off daily/quarter goals, stay focused as well as provide a clear timeline and deadlines. Here I’m gonna want to build a path, a path that I will try to follow during the year (probably it will be adjusted often, but I leave just a high-level vision here)
This kind of experiment for me</p>
        <p>Sooo, pouring a coffee and let’s do it

## Finish what you started

Finishing what you start is an essential ingredient for success. It doesn't matter if it's a large project or a small task, learning to complete what you have started can help you become more productive and successful.

It's important to remember that completing projects isn't just about getting them done, it's about taking pride in your work and achieving a sense of accomplishment. When you finish something that you've started, no matter how big or small, it gives you a boost of confidence and motivation to take on the next challenge.

By developing the habit of finishing what you start, not only will your productivity increase but so will your ability to achieve success in all areas of life.

## Practice new technologies

As the world is rapidly changing, it's important to stay up-to-date with the latest technologies and trends. Sounds crazy but AI is everywhere, (chatGPT ),  blockchain technology, IoT, Extended Reality
soo, this year a personal roadmap for myself to practice new technologies and expand my knowledge. 

I plan on taking online courses, attending webinars and conferences, reading books and articles about new technologies, and connecting with industry professionals who can help me understand how these technologies are being used in the real world. Additionally, I will be creating projects that utilize these new technologies so that I can gain hands-on experience.

By taking this approach, I hope to become an expert in the latest technologies by the end of this year.

## Developing the product mindset

Developing a product mindset is essential for anyone who wants to succeed in the business world. It involves understanding the product, its features and benefits, and how to use it to its fullest potential. Reading is one of the best ways to develop a product mindset. By reading books, blogs, and articles related to your industry, you can gain insights into different aspects of the product that you didn't know before. You can also learn about new strategies and techniques that can help you improve your products or services. Reading also helps you stay up-to-date with industry trends and changes so that you can make better decisions when it comes to developing your products. With a strong product mindset, you will be able to build successful products that meet customer needs and generate profits for your company.</p>


    
      </article>
      
        

        
    </div>
  );
}

export default Post;


export const getStaticPaths = async () => {
  const postsColectionRef = await getDocs(collection(db, 'posts'))

  const paths = postsColectionRef.docs.map(entry => ({
    params: {
      slug: entry.data().slug
    }
  }));
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;

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