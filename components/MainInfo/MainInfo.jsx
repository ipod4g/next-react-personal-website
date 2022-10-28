import React from 'react';
import Image from 'next/image';

function MainInfo(props) {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start w-full mb-10'>
      <div className='flex md:w-3/4 flex-col'>
        <h1 className='font-bold text-3xl md:text-5xl mb-2 text-black'>Roman Bezushko</h1>
        <div>
        Senior Front-end React developer
        <p>I am passionate about doing the best possible work</p>
        </div>
      </div>
      <div className='flex-shrink-1 p-4 md:p-4 md:order-last order-first'>
        <Image 
          className='rounded-full'
          src="/images/portfolio-image.jpg"
          alt='portfolio-image'
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}

export default MainInfo;