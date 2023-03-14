import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TechLabel from '../components/shared/TechLabel';



function Projects(props) {
  return (
    <div>
      <h2 className='font-bold text-2xl tracking-tight mb-6 mt-8 text-title dark:text-gray-200'>Projects</h2>

      <a href="https://www.matchoffice.com" target="_blank" className='relative flex mb-6 rounded items-start 
      hover:bg-white hover:top-[-4px] transition-all duration-200 hover:ease-out'>
          <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-[#a5dff9] to-[#30A9DE] dark:from-[#386276]  dark:to-[#103343] rounded blur opacity-25 group-hover:opacity-0 md:group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative p-4 bg-white ring-1 ring-gray-900/5 dark:ring-blue rounded leading-none block sm:flex justify-start space-x-0 sm:space-x-6 dark:bg-navigation">
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
          <h4 className='text-lg font-bold tracking-tight text-title dark:text-gray-200'>Matchoffice</h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300 text-sm mt-2 mb-4 pr-8'>
            one of the leading players in the commercial property lease market in the world. 
            Independent portal that collects all business centres in one place, making it easier for potential 
            tenants to find their future office spaces for rent.
          </p>
          <div className='flex md:flex-row pr-0 sm:pr-48 flex-wrap'>
            <TechLabel title='Ruby on Rails' />
            <TechLabel title='React' />
            <TechLabel title='Redux' />
            <TechLabel title='Bootstrap' />
            <TechLabel title='Webpack' />
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
          <div class="absolute -inset-1 bg-gradient-to-r from-[#a5dff9] to-[#30A9DE] dark:from-[#386276]  dark:to-[#103343] rounded blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative p-4 bg-white ring-1 ring-gray-900/5 dark:ring-blue rounded leading-none block sm:flex justify-start space-x-0 sm:space-x-6 dark:bg-navigation">
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
          <h4 className='text-lg font-bold tracking-tight text-title dark:text-gray-200'>Freelancer on Upwork</h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300 text-sm mt-2 mb-4 pr-8'>
            I have worked with a wide range of clients and projects to deliver high-quality work that exceeds client expectations,
            committed to creating visually appealing, user-friendly websites that drive results.
          </p>
          <div className='flex md:flex-row pr-0 sm:pr-48 flex-wrap'>
            <TechLabel title='HTML/CSS' />
            <TechLabel title='React' />
            <TechLabel title='JavaScript' />
            <TechLabel title='Api Integration' />
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
          <div class="absolute -inset-1 bg-gradient-to-r from-[#bde7fa] to-[#64c1e8] dark:from-[#386276]  dark:to-[#103343] rounded blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 "></div>
          <div class="relative p-4 bg-white ring-1 ring-gray-900/5 dark:ring-blue rounded leading-none block sm:flex items-top justify-start space-x-0 sm:space-x-6 dark:bg-navigation">
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
          <h4 className='text-lg font-bold tracking-tight text-title dark:text-gray-200'>English Irream School</h4>
          <p className='leading-5 text-gray-700 dark:text-gray-300 text-sm mt-2 mb-4 pr-8'>
            landing page for a language school, where you can find the main information,
            attract potential students, and encourage them to sign up for courses. 
            Read reviews or feedback from previous students.

            {/* landing page for a language school, where you can read main information ab is a place where you get confidence in speaking a foreign language.
            Boost your communication skills. IRREAM language school is a place where you get confidence in speaking a 
            foreign language. */}
            </p>
          <div className='flex md:flex-row pr-0 sm:pr-48 flex-wrap'>
            <TechLabel title='React' />
            <TechLabel title='AWS Hosting' />
          </div>
        </div>
        </div>
        </div>
      </a>

      
    </div>
  );
}

export default Projects;