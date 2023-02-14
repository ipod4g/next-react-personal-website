import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechLabel from '../components/shared/TechLabel';


// bg-gradient-to-r


function Projects(props) {
  return (
    <div>
      <h2 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-title dark:text-white'>Projects</h2>

      <a href="https://www.matchoffice.com" target="_blank" className='relative top-0 flex mb-6 rounded items-start 
      hover:bg-white hover:top-[-4px] transition-all duration-200 hover:ease-out
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-sky-50 hover:bg-gradient-to-l dark:bg-navigation'>
          <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-[#a5dff9] to-[#30A9DE] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative p-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 dark:bg-navigation">
        <div className='relative h-20 w-20 block mr-4 shrink-0'>
          <Image 
            className='rounded-full'
            src="/images/matchoffice.png"
            alt='project-matchoffice'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div>
          <h4 className='text-lg font-bold tracking-tight text-title dark:text-red-500'>Matchoffice</h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300 text-sm'>Find a decent workspace for rent in any city, town, or village in the world.Find a decent workspace for rent in any city, town, or village in the world. Find a decent workspace for rent in any city, town</p>
          <div className='flex md:flex-row mt-2'>
            <TechLabel title='Ruby on Rails' />
            <TechLabel title='React' />
          </div>
        </div>

        </div>
        </div>
        
      </a>






      {/* <a href="https://www.upwork.com/freelancers/~01872814c9610089a8" target="_blank" className='relative top-0 flex mb-6 rounded p-4 items-start border 
      hover:shadow-projects hover:border hover:border-black hover:bg-white hover:top-[-4px] transition-all duration-200 hover:ease-out
      bg-gradient-to-l from-white to-sky-50 hover:bg-gradient-to-r'>
        <div className='relative h-16 w-16 block mr-4 shrink-0'> */}

<a href="https://www.upwork.com/freelancers/~01872814c9610089a8" target="_blank" className='relative top-0 flex mb-6 rounded items-start 
      hover:bg-white hover:top-[-4px] transition-all duration-200 hover:ease-out
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-sky-50 hover:bg-gradient-to-l'>
          <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-[#a5dff9] to-[#30A9DE] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative p-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <div className='relative h-20 w-20 block mr-4 shrink-0'>
          <Image 
            className='rounded-full'
            src="/images/upwork.png"
            alt='project-irream'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div>
          <h4 className='text-lg font-bold tracking-tight text-title'>Freelancer on upwork</h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300 text-sm'>Boost your communication skills. IRREAM language school is a place where you get confidence in speaking a foreign language.</p>
          <div className='flex md:flex-row mt-2'>
            <TechLabel title='React' />
            <TechLabel title='AWS' />
          </div>
        </div>
        </div>
        </div>
      </a>





      {/* <a href="https://www.english-irream.com/" target="_blank" className='relative top-0 flex mb-6 rounded p-4 items-start border 
      hover:shadow-projects hover:border hover:border-black hover:bg-white hover:top-[-4px] transition-all duration-200 hover:ease-out
      bg-gradient-to-r from-white to-sky-50 hover:bg-gradient-to-l'>
        <div className='relative h-16 w-16 block mr-4 shrink-0'> */}

        <a href="https://www.english-irream.com/" target="_blank" className='relative top-0 flex mb-6 rounded items-start 
          hover:bg-white hover:top-[-4px] transition-all duration-200 hover:ease-out
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-sky-50 hover:bg-gradient-to-l'>
          <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-[#bde7fa] to-[#64c1e8] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative p-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <div className='relative h-20 w-20 block mr-4 shrink-0'>
          <Image 
            className='rounded-full'
            src="/images/irream.png"
            alt='project-irream'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div>
          <h4 className='text-lg font-bold tracking-tight text-title'>English Irream School</h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300 text-sm'>Boost your communication skills. IRREAM language school is a place where you get confidence in speaking a foreign language.</p>
          <div className='flex md:flex-row mt-2'>
            <TechLabel title='React' />
            <TechLabel title='AWS' />
          </div>
        </div>
        </div>
        </div>
      </a>

      
    </div>
  );
}

export default Projects;