import React, { useState } from 'react';

function Contact(props) {
  const [email, setEmail] = useState('')

  async function sendEmail(e) {
    e.preventDefault();
    
    // need  connect to some database
    console.log('email->', email)
  }


  return (
    <div className='border-2 rounded p-6 mt-6 bg-red-100'>
      <h4>Want to hire me as a freelancer? Let's discuss.</h4>
      <p>Drop your message and let's discuss about your project.</p>
      <a href="https://telegram.me/bezushko" target="_blank"
        className='bg-chat-button w-full my-6 p-2 rounded text-center font-bold text-white block '
      >
        Chat me on Telegram
        </a>

      <h4>Or send me your email, and I will gert in touch</h4>
      <form onSubmit={sendEmail} >
        <div className='flex border-2 rounded w-full justify-between relative'>
          <input
          type="email"
          autoComplete='email'
          placeholder='email@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2"
          required
          />
          <button
            className='bg-chat-button absolute right-0 p-2 text-white rounded font-bold px-6'
            type='submit'>
              Get in touch
          </button>
          </div>
      </form>
    </div>
  );
}

export default Contact;