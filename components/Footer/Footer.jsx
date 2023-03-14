import React from 'react';

function Footer() {
  return(
    <footer aria-label="Site Footer" >
      <div class="mx-auto max-w-2xl mt-4 px-4 sm:px-6 pt-6">
        <div class="flex items-center justify-between border-t py-4 dark:border-blue">

          <p class="flex items-center mt-4 text-gray-700 dark:text-gray-300 lg:mt-0 lg:text-right">
              Build with <a href="https://nextjs.org/" target="_blank">
                  <img src="/images/icons/nextjs-logo.svg" className='mx-2' alt="next-logo" height='24px' width="24px" />
                </a> 
              and <a href="https://tailwindcss.com/" target="_blank">
                  <img src="/images/icons/tailwind-logo.svg" className='mx-2' alt="tailwind-logo" height='24px' width="24px" />
              </a>
          </p>

          <p class="mt-4 justify-center text-gray-700 dark:text-gray-300 ">
            © R.Bezushko
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer


