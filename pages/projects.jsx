import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechLabel from '../components/shared/TechLabel';

function Projects(props) {
  return (
    <div>
      <h2 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black'>Projects</h2>

      <a href="https://www.matchoffice.com" target="_blank" className='flex mb-6 items-start border-2 rounded p-4'>
        <div className='relative h-16 w-16 block mr-4 shrink-0'>
          <Image 
            className='rounded-full'
            src="/images/matchoffice.png"
            alt='project-matchoffice'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div>
          <h4 className='text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100'>Matchoffice</h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300'>Find a decent workspace for rent in any city, town, or village in the world.</p>
          <div className='flex md:flex-row '>
            <TechLabel title='Ruby on Rails' />
            <TechLabel title='React' />
          </div>
        </div>
        
      </a>

      <a href="https://www.english-irream.com/" target="_blank" className='flex mb-6  items-start border-2 rounded p-4'>
        <div className='relative h-16 w-16 block mr-4 shrink-0'>
          <Image 
            className='rounded-full'
            src="/images/irream.png"
            alt='project-irream'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div>
          <h4 className='text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100'>English Irream School</h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300'>Boost your communication skills. IRREAM language school is a place where you get confidence in speaking a foreign language.</p>
          <div className='flex md:flex-row'>
            <TechLabel title='React' />
            <TechLabel title='AWS' />
          </div>
        </div>
      </a>
      
    </div>
  );
}

export default Projects;