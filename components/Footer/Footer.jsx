import React from 'react';

function Footer() {
  return(
    <footer aria-label="Site Footer" >
      <div class="mx-auto max-w-screen-xl pt-10 pb-6">
        <div class="sm:flex sm:items-center sm:justify-between">

        <p class="flex items-center mt-4 text-gray-500 lg:mt-0 lg:text-right">
            Build with <a href="https://nextjs.org/" target="_blank">
                <img src="/images/icons/nextjs-logo.svg" className='mx-2' alt="next-logo" height='24px' width="24px" />
              </a> 
            and <a href="https://tailwindcss.com/" target="_blank">
                <img src="/images/icons/tailwind-logo.svg" className='mx-2' alt="tailwind-logo" height='24px' width="24px" />
            </a>
            
          </p>

          <p class="flex justify-center text-gray-500 sm:justify-start">
            © Roman Bezushko
          </p>

          
        </div>
      </div>
    </footer>
  )
}

export default Footer


