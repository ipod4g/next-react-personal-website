import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes'

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className='sticky top-0 z-10 bg-white md:flex justify-between items-center max-w-4xl mx-auto mb-1 p-8'>
      <div className='flex justify-between items-center'>
        <div className='cursor-pointer'>
          {theme === 'light' 
            ? <img onClick={() => setTheme('dark')} src="/images/icons/dark.png" alt="dark-mode" height='24px' width="24px" />
            : <img onClick={() => setTheme('light')} src="/images/icons/light1.png" alt="dark-mode" height='24px' width="24px" />
          }
        </div>
        <span className='text-3xl mx-2 cursor-pointer md:hidden block'>
          <ion-icon name={open ? 'close' : 'menu'} onClick={() => setOpen(!open)}></ion-icon>
        </span>
      </div>
      

      <ul className={`md:flex md:z-auto md:static absolute
        w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 
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