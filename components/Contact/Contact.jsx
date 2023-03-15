import React, { useState } from 'react';
import { db } from '../../pages/api/firebase-config';
import { collection, addDoc } from 'firebase/firestore'

function Contact(props) {
  const [email, setEmail] = useState('');
  const [gotEmail, setGotEmail] = useState(false)


  async function sendEmail(e) {
    e.preventDefault();

    const emailCollectionRef = collection(db, 'emails')


    const response = await addDoc(emailCollectionRef, {email})
      .then((emailCollectionRef) => {
        setGotEmail(true)
      })
      .catch(error => {
        console.log('some error happen', error)
      })
    
    console.log('email->', email)
  }


  return (
    <div className='rounded mt-8 '>
      <h4 className='text-xl font-bold tracking-tight text-title dark:text-gray-200'>Let's work together! 🚀</h4>

      <p className='text-gray-700 mt-4 mb-2 sm:pr-20 dark:text-gray-300'>
        Hey there! If you need a software engineer, product/project manager, 
        or just a great team player, I'm here to lend a hand. 🤝</p>
      
      {/* <a href="https://telegram.me/bezushko" target="_blank"
        className='bg-chat-button w-full my-6 p-2 rounded text-center font-bold text-white block '
      >
        Chat me on Telegram
        </a> */}

      <p className='text-gray-700 mb-4 dark:text-gray-300'>👇 Drop me your email, and I will get in touch 👇</p>
      {gotEmail && (
        <div className='my-3'>
        <p className='text-gray-700'> Thanks, I will write back to you asap 👋</p>
      </div>
      )}
      {!gotEmail && (
        <form onSubmit={sendEmail} >
          <div className='flex border rounded w-full justify-between relative'>
            <input
            type="email"
            autoComplete='email'
            placeholder='email@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 rounded"
            required
            />
            <button
              className='bg-chat-button absolute right-0 p-2 text-white rounded font-medium px-6 italic
              bg-gradient-to-r from-[#a5dff9] to-[#30A9DE] hover:bg-gradient-to-l'
              type='submit'>
                Get in touch
            </button>
          </div>
        </form>
      )}

    </div>
  );
}


export default Contact;