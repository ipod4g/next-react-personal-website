import { useDocument } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from 'react';
import { doc, writeBatch, increment, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../pages/api/firebase-config';

// Firebase 8
// db.collection('books')

// Firebase 9 
// collection(db, 'books')

async function getIP(){
  const response = await fetch('http://api.ipify.org/?format=json');
  const data = await response.json();
  return data;
}

export function HeartButton({postRef, userIp, path, heartCount}) {
  // const heartsRef = doc(db, "posts", "second-post", 'hearts', userIp)

  const heartsRef = doc(db, `${path}/hearts/${userIp}`)
  const [heartDoc] = useDocument(heartsRef)


  const addHeart = async() => {
    const userIp = await getIP().then(data => data.ip);

    const batch = writeBatch(db)
    batch.update(postRef, {heartCount: increment(1)})

    await setDoc(doc(db, `${path}/hearts/${userIp}`), {userIp});

    await batch.commit()

  }

  const removeHeart = async() => {
    const batch = writeBatch(db)

    batch.update(postRef, {heartCount: increment(-1)})

    await deleteDoc(doc(db, `${path}/hearts/${userIp}`));
    
    // batch.delete(heartRef);

    await batch.commit();
  }

  return heartDoc?.exists() ? (
      <button className='' onClick={removeHeart}>
        <img  src="/images/icons/heart-fill.svg" alt="liked" height='24px' width="24px" />{heartCount}
      </button>
    ) : (
      <button onClick={addHeart}>
         <img className='animate-pulse transition hover:scale-125' src="/images/icons/heart.svg" alt="like" height='24px' width="24px" /> {heartCount}
      </button>
    ); 

}