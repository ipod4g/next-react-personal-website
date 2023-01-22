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

  return (
    <div>
        <h1>Post details</h1>
        <h2>{post.title}</h2>
        <h2>{post.heartCount}</h2>
        <h2>{post.description}</h2>
        <h2>{post.id}</h2>

        <HeartButton  postRef={docRef} userIp={userIp} path={path} />

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