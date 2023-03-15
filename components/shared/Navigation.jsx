import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

const Navigation = ({slug}) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const checkBlog = router.pathname === '/blog' || router.pathname === "/blog/[slug]"

  return (
    <nav className='fixed w-full left-2/4 transform -translate-x-1/2 top-0 z-10 flex justify-between bg-white dark:bg-navigation items-center max-w-2xl px-4 sm:px-6 mx-auto p-6'>
      <div className='flex justify-between items-center'>
        {/* <div className='cursor-pointer absolute top-24'> */}
        {/* {theme === 'light' 
            ? <svg className='group hover:scale-125 animate-pulse' onClick={() => setTheme('dark')} fill='white' width="24" height="24" viewBox="0 0 24 24">
            <g className='stroke-black stroke-2 group-hover:stroke-yellow-400' clip-path="url(#a)">
            <circle cx="12" cy="12" r="4" stroke-linejoin="round"/>
            <path stroke-linecap="round" d="M20 12h1M3 12h1M12 20v1M12 3v1M17.657 17.657l.707.707M5.636 5.636l.707.707M6.343 17.657l-.707.707M18.364 5.636l-.707.707"/>
            </g>
            <defs> 
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z"/>
                </clipPath>
            </defs>
            </svg>
            : 
            <svg className='hover:fill-yellow-400 hover:scale-125 fill-white' onClick={() => setTheme('light')}  width="24" height="24" viewBox="0 0 24 24"><g clip-path="url(#a)"><path  d="m20.995 11.711 1.25-.039a1.25 1.25 0 0 0-1.605-1.159l.355 1.198Zm-8.707-8.706 1.199.355a1.25 1.25 0 0 0-1.16-1.605l-.038 1.25Zm8.352 7.508a5.752 5.752 0 0 1-1.64.237v2.5c.815 0 1.605-.119 2.351-.34l-.711-2.397ZM19 10.75A5.75 5.75 0 0 1 13.25 5h-2.5A8.25 8.25 0 0 0 19 13.25v-2.5ZM13.25 5c0-.572.083-1.122.237-1.64L11.09 2.65A8.253 8.253 0 0 0 10.75 5h2.5ZM12 4.25c.083 0 .166.001.25.004l.078-2.499A10.415 10.415 0 0 0 12 1.75v2.5ZM4.25 12A7.75 7.75 0 0 1 12 4.25v-2.5C6.34 1.75 1.75 6.34 1.75 12h2.5ZM12 19.75A7.75 7.75 0 0 1 4.25 12h-2.5c0 5.66 4.59 10.25 10.25 10.25v-2.5ZM19.75 12A7.75 7.75 0 0 1 12 19.75v2.5c5.66 0 10.25-4.59 10.25-10.25h-2.5Zm-.004-.25c.003.084.004.167.004.25h2.5c0-.11-.002-.219-.005-.328l-2.499.079Z"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
          } */}
          {/* {theme === 'light' 
            ? <img onClick={() => setTheme('dark')} src="/images/icons/dark.png" alt="dark-mode" height='24px' width="24px" />
            : <img onClick={() => setTheme('light')} src="/images/icons/light1.png" alt="dark-mode" height='24px' width="24px" />
          } */}
        {/* </div> */}
        <div className='md:my-0 cursor-pointer' onClick={() => setOpen(!open)}>
        {theme === 'light' 
            ? <svg className='hover:fill-stone-300 hover:scale-110 fill-gray-700' onClick={() => setTheme('dark')}  width="20" height="20" viewBox="0 0 24 24"><g clip-path="url(#a)"><path  d="m20.995 11.711 1.25-.039a1.25 1.25 0 0 0-1.605-1.159l.355 1.198Zm-8.707-8.706 1.199.355a1.25 1.25 0 0 0-1.16-1.605l-.038 1.25Zm8.352 7.508a5.752 5.752 0 0 1-1.64.237v2.5c.815 0 1.605-.119 2.351-.34l-.711-2.397ZM19 10.75A5.75 5.75 0 0 1 13.25 5h-2.5A8.25 8.25 0 0 0 19 13.25v-2.5ZM13.25 5c0-.572.083-1.122.237-1.64L11.09 2.65A8.253 8.253 0 0 0 10.75 5h2.5ZM12 4.25c.083 0 .166.001.25.004l.078-2.499A10.415 10.415 0 0 0 12 1.75v2.5ZM4.25 12A7.75 7.75 0 0 1 12 4.25v-2.5C6.34 1.75 1.75 6.34 1.75 12h2.5ZM12 19.75A7.75 7.75 0 0 1 4.25 12h-2.5c0 5.66 4.59 10.25 10.25 10.25v-2.5ZM19.75 12A7.75 7.75 0 0 1 12 19.75v2.5c5.66 0 10.25-4.59 10.25-10.25h-2.5Zm-.004-.25c.003.084.004.167.004.25h2.5c0-.11-.002-.219-.005-.328l-2.499.079Z"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z"/></clipPath></defs></svg>
            : <svg className='group hover:scale-110 fill-white hover:fill-yellow-400' onClick={() => setTheme('light')} width="24" height="24" viewBox="0 0 24 24">
            <g className='stroke-white stroke-2 group-hover:stroke-yellow-400' clip-path="url(#a)">
            <circle cx="12" cy="12" r="4" stroke-linejoin="round"/>
            <path stroke-linecap="round" d="M20 12h1M3 12h1M12 20v1M12 3v1M17.657 17.657l.707.707M5.636 5.636l.707.707M6.343 17.657l-.707.707M18.364 5.636l-.707.707"/>
            </g>
            <defs> 
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z"/>
                </clipPath>
            </defs>
            </svg>
          }
        </div>
      </div>

      <div className='flex gap-2 text-sm font-medium '>
        <Link href="/">
          <a className={`px-3 text-gray-700 transition hover:text-gray-500/75 dark:text-white ${router.pathname == "/" ? "text-links dark:text-links" : "text-gray-700"}`}> Home</a> 
        </Link>
        <Link href="/projects" >
          <a className={`px-3 transition hover:text-gray-500/75 dark:text-white ${router.pathname == "/projects" ? "text-links dark:text-links" : "text-gray-700"}`}>Projects</a>
        </Link>
        <Link href="/blog" >
          <a className={`px-3 text-gray-700 transition hover:text-gray-500/75 dark:text-white ${checkBlog ? "text-links dark:text-links" : "text-gray-700"}`}>
            Blog
          </a>
        </Link>
      </div>

    </nav>
  );
};

export default Navigation;