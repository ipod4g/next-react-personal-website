import React, {useState} from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='sticky-nav md:flex justify-between items-center max-w-4xl mx-auto  md:mt-4 mb-1 p-8'>
      <div className='flex justify-between items-center'>
        <Link href="/" className='pb-0'>
          Small logo
        </Link>
        <span className='text-3xl mx-2 cursor-pointer md:hidden block'>
          <ion-icon name={open ? 'close' : 'menu'} onClick={() => setOpen(!open)}></ion-icon>
        </span>
      </div>
      

      <ul className={`md:flex md:z-auto md:static absolute
       bg-red-600 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 
       md:opacity-100 transition-all ease-in z-10 duration-500 ${open ? 'top-[80px]' : 'top-[-400px]'}`}>
        <li className='mx-4 my-6 md:my-0 ' onClick={() => setOpen(!open)}>
          <Link href="/">Home</Link>
        </li>
        <li className='mx-4 my-6 md:my-0' onClick={() => setOpen(!open)}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className='mx-4 my-6 md:my-0 ' onClick={() => setOpen(!open)}>
          <Link href="/posts">Blog</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;