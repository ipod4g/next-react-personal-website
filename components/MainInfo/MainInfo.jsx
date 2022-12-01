import React from 'react';
import Image from 'next/image';

function MainInfo(props) {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start w-full my-10'>
      <div className='flex md:w-3/4 flex-col'>
        <h1 className='font-bold text-3xl md:text-5xl mb-2 text-black'>Hi there ✋</h1>
        <h1 className='font-bold text-3xl md:text-5xl mb-2 text-black'>I am Roman Bezushko</h1>
        <div>
        Senior Front-end React developer
        <p>I am passionate about doing the best possible work</p>
        <div className="flex mt-4">
          <a href="https://www.linkedin.com/in/romanbezushko/" target="_blank">
            <svg className='fill-icons h-6 w-6 mr-2 hover:fill-indigo-300' viewBox="0 0 56.693 56.693">
              <path d="M30.071 27.101v-.077a2.031 2.031 0 0 1-.05.077h.05z"/>
              <path d="M49.265 4.667H7.145c-2.016 0-3.651 1.596-3.651 3.563v42.613c0 1.966 1.635 3.562 3.651 3.562h42.12c2.019 0 3.654-1.597 3.654-3.562V8.23c0-1.968-1.636-3.563-3.654-3.563zm-30.79 41.637H11.01V23.845h7.465v22.459zm-3.732-25.527h-.05c-2.504 0-4.124-1.725-4.124-3.88 0-2.203 1.67-3.88 4.223-3.88 2.554 0 4.125 1.677 4.175 3.88 0 2.155-1.622 3.88-4.224 3.88zm30.651 25.527h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078-2.062 0-3.29 1.389-3.831 2.731-.197.479-.245 1.149-.245 1.821v12.543h-7.465s.098-20.354 0-22.459h7.465v3.179c.992-1.53 2.766-3.709 6.729-3.709 4.911 0 8.594 3.211 8.594 10.11v12.88z"/>
            </svg>
          </a>

          <a href="https://github.com/ipod4g" target="_blank">
            <svg className='fill-icons h-6 w-6 mr-2 hover:fill-indigo-300' viewBox="0 0 32 32">
              <path d="M16.003 0C7.17 0 .008 7.162.008 15.997c0 7.067 4.582 13.063 10.94 15.179.8.146 1.052-.328 1.052-.752 0-.38.008-1.442 0-2.777-4.449.967-5.371-2.107-5.371-2.107-.727-1.848-1.775-2.34-1.775-2.34-1.452-.992.109-.973.109-.973 1.605.113 2.451 1.649 2.451 1.649 1.427 2.443 3.743 1.737 4.654 1.329.146-1.034.56-1.739 1.017-2.139-3.552-.404-7.286-1.776-7.286-7.906 0-1.747.623-3.174 1.646-4.292-.165-.404-.715-2.031.157-4.234 0 0 1.343-.43 4.398 1.641a15.31 15.31 0 0 1 4.005-.538c1.359.006 2.727.183 4.005.538 3.055-2.07 4.396-1.641 4.396-1.641.872 2.203.323 3.83.159 4.234 1.023 1.118 1.644 2.545 1.644 4.292 0 6.146-3.74 7.498-7.304 7.893C19.479 23.548 20 24.508 20 26v4.428c0 .428.258.901 1.07.746C27.422 29.055 32 23.062 32 15.997 32 7.162 24.838 0 16.003 0z" clip-rule="evenodd"/>
            </svg>
          </a>

          <a href="https://telegram.me/bezushko" target="_blank">
            <svg className='fill-icons h-6 w-6 mr-2 hover:fill-indigo-300' viewBox="0 0 32 32"><g id="icons"><g id="telegram"><path d="M21 12.1 13.2 19c-.1.1-.1.2-.1.3l-.3 2.7c0 .1-.1.1-.2 0l-1.2-4c-.1-.2 0-.4.2-.5l9.1-5.7c.3-.1.5.2.3.3z" />
            <path d="M16 2.2c-3.8 0-7.3 1.5-9.8 4-2.5 2.5-4.1 6-4.1 9.8 0 3.8 1.5 7.3 4.1 9.8 2.5 2.5 6 4 9.8 4 3.8 0 7.3-1.5 9.8-4 2.5-2.5 4.1-6 4.1-9.8C29.8 8.4 23.6 2.2 16 2.2zm8.2 7.9-2.8 13.6c-.1.6-.9.9-1.4.5L15.7 21l-2.2 2.2c-.4.4-1 .2-1.2-.3l-1.6-5-4.2-1.3c-.6-.2-.6-.9 0-1.1L23.2 9c.5-.1 1.2.4 1 1.1z" /></g></g>
            </svg>
          </a>
        </div>
        </div>
      </div>
      {/* <div className='flex-shrink-1 p-4 md:p-4 md:order-last order-first'>
        <Image 
          className='rounded-full'
          src="/images/portfolio-image.jpg"
          alt='portfolio-image'
          width={150}
          height={150}
        />
      </div> */}
    </div>
  );
}

export default MainInfo;