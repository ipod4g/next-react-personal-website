import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TechLabel from '../shared/TechLabel';


function Experience(props) {
  return (
    <div className='mb-6'>
        <h2 className='font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-8 text-title dark:text-gray-200'>Experience</h2>
        <p className='mb-6'>you can <a href="https://drive.google.com/file/d/1AdZjozv-neOI4acQAz6ME-rP9sEDU8dW/view?usp=sharing" target='_blank' className='font-semibold relative'> 
        <span className='absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#a5dff9] to-[#30A9DE]' />🔎  view</a> or <a href="https://drive.google.com/file/d/1AdZjozv-neOI4acQAz6ME-rP9sEDU8dW/view?usp=sharing" target='_blank' className='font-semibold relative'>
        <span className='absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#a5dff9] to-[#30A9DE]' />
          ⬇️  download</a>  the resume</p>
        <Tabs className='flex'>
        <TabList className='flex flex-col shrink-0' >
          <Tab selectedClassName="border-l-chat-button [&>p]:text-chat-button dark:[&>p]:text-chat-button" className='flex px-2 sm:px-4 items-center h-10 border-l-[2px] cursor-pointer outline-none'>
            <p className='font-medium text-gray-700 dark:text-gray-500'>2023</p>
          </Tab>
          <Tab selectedClassName="border-l-chat-button [&>p]:text-chat-button dark:[&>p]:text-chat-button" className='flex px-2 sm:px-4 items-center h-10 border-l-[2px] cursor-pointer outline-none'>
            <p className='font-medium text-gray-700 dark:text-gray-500'>2019</p>
          </Tab>
          <Tab selectedClassName="border-l-chat-button [&>p]:text-chat-button dark:[&>p]:text-chat-button" className='flex px-2 sm:px-4 items-center h-10 border-l-[2px] cursor-pointer outline-none'>
            <p className='font-medium text-gray-700 dark:text-gray-500'>2017</p>
          </Tab>
          <Tab selectedClassName="border-l-chat-button [&>p]:text-chat-button dark:[&>p]:text-chat-button" className='flex px-2 sm:px-4 items-center h-10 border-l-[2px] cursor-pointer outline-none'>
            <p className='font-medium text-gray-700 dark:text-gray-500'>2016</p>
          </Tab>
        </TabList>


        <TabPanel>
          <div className='ml-2 sm:ml-4'>
            <h3 className='font-semibold'>Product Manager & Developer | <span className='font-bold text-links underline'>
              <a href="https://www.matchoffice.com" target="_blank">MatchOffice</a></span>
            </h3>
            <p className='mb-4 italic text-gray-700 text-sm dark:text-gray-500'>Sept 2019 - till now</p>
            <ul className='mb-4 text-gray-700'>
              <li className='relative mb-4'>
              {/* <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
              <g transform="rotate(90 12 12)">
              <path  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z">

              </path>
              </g>
        </svg> */}
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  organizing & control over the development teams (Dev, Design, SEO )
                  maintaining a prioritized roadmap and timeline for product features and user stories, 
                  work with business analysis, UI prototyping, requirements specification, new features generation
                  
                </span>
              </li>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                  </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  analyzing and reporting on product development performance with JIRA, tracking project reporting, team velocity, controlling a development process,
                  defining sprint scopes, prioritizing features and tasks, clarifying requirements 
                </span>
              </li>

              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                  </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  writing release notes and feature announcements, deployment notes CI/CD, 
                  defining success criteria for testing and product acceptance, conducting A/B testing, working with Google Analytics
                </span>
              </li>

              <span className='inline-block h-px w-10 bg-gray-400 dark:bg-title-dark' />
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='ml-2 sm:ml-4'>
            <h2 className='font-semibold'>Freelancer | <span className='font-bold text-links underline'><a href="https://www.upwork.com" target="_blank">Upwork</a>   </span></h2>
            <p className='mb-4 italic text-gray-700 text-sm'>Jun 2017 - Sept 2018</p>
            <ul className='mb-4 text-gray-700'>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  the biggest project was related to a telecom company, I work on creating an admin panel
                  building the user interface, creating the layout, navigation, and interactivity of the application.
                </span>
                <br />
                <a className='block ml-5 italic text-links underline' href="http://itpscorp.com/">itpscorp.com</a>
                
              </li>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  work primarily on feature enhancements and maintain the existing code base, improving the responsiveness
                 of the user interface, participate in code reviews to maintain code quality and best practices
                </span>
                
              </li>

              <span className='hidden h-px w-10 bg-gray-400 dark:bg-title-dark sm:inline-block' />
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='ml-2 sm:ml-4'>
            <h2 className='font-semibold'>Software Engineer | <span className='font-bold text-links underline'><a href="https://www.n-ix.com" target="_blank">N-IX</a>   </span></h2>
            <p className='mb-4 italic text-gray-700 text-sm'>Jun 2017 - Sept 2018</p>
            <ul className='mb-4 text-gray-700'>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  developing project from scratch using React/Redux and neo4j as database, writing clean and maintainable code, reusable components, 
                  implement design, developing features
                </span>
              </li>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  optimizing application for performance to ensure that it loads quickly and performs well, 
                  includes code optimization, image compression, and lazy loading of components
                </span>
                
              </li>

              <span className='hidden h-px w-10 bg-gray-400 dark:bg-title-dark sm:inline-block' />
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='ml-2 sm:ml-4'>
            <h2 className='font-semibold'>Software Engineer | <span className='font-bold text-links underline'> <a className='hover:underline' href="https://www.softserveinc.com" target="_blank">Softserve</a></span></h2>
            <p className='mb-4 italic text-gray-700 text-sm'>Apl 2016 - Jun 2017</p>
            <ul className='mb-4 text-gray-700 '>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                  </svg> 
                  <span className='block ml-5 dark:text-gray-300'>work closely with designers to turn visual designs into functioning web pages, completely change UI, added new functionality, take part in developing features, bug fixing, developing responsive design etc</span>
                </li>
                <li className='relative'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                  </svg> 
                  <span className='block ml-5 dark:text-gray-300'>
                    cooperate with the backend team, this includes exchanging data, implementing APIs, and ensuring that the application is functioning as expected
                  </span>
                  
                </li>

                <span className='hidden h-px w-10 bg-gray-400 dark:bg-title-dark sm:inline-block' />
            </ul>
          </div>
        </TabPanel>


        <TabPanel>
          <div className='ml-4'>
            <h2 className='font-bold'>Freelancer | <span className='font-bold text-links'><a href="https://www.upwork.com" target="_blank">Upwork</a>   </span></h2>
            <p className='mb-4 italic text-gray-700 text-sm'>Jun 2017 - Sept 2018</p>
            <ul className='mb-4 text-gray-700'>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue dark:text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  the biggest project was related to a telecom company, I work on creating an admin panel
                  building the user interface, creating the layout, navigation, and interactivity of the application.
                </span>
                <br />
                <a className='block ml-5' href="http://itpscorp.com/">itpscorp.com</a>
                
              </li>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue dark:text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                </svg> 
                <span className='block ml-5 dark:text-gray-300'>
                  work primarily on feature enhancements and maintain the existing code base, improving the responsiveness
                 of the user interface, participate in code reviews to maintain code quality and best practices
                </span>
                
              </li>

              <span className='hidden h-px w-10 bg-gray-400 dark:bg-title-dark sm:inline-block' />
            </ul>
          </div>
        </TabPanel>



        {/* <TabPanel>
          <div className='ml-4'>
            <h2 className='font-bold'>Product Manager&Developer | <span className='font-bold text-links'><a href="https://www.matchoffice.com" target="_blank">MatchOffice</a></span></h2>
            <p className='mb-4 italic text-gray-700 text-sm'>Sept 2019 - till now</p>
            <ul className='mb-4 text-gray-700'>
              <li className='relative mb-4'>
                <svg class="absolute top-[6px] w-4 h-4 mr-1.5 text-blue dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd">
                    </path>
                </svg> 
                <span className='block ml-5'>
                  Build scalability and reusable components, implement design, developing new features, working with improvement of side speed
                </span>
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, 
                reprehenderit nostrum tenetur atque explicabo iusto animi laborum 
                tempora quis non incidunt itaque dolorem quidem exercitationem corrupti voluptates? Quas, fuga saepe.
                </li>
            </ul>
            <TechLabel title='React' />
            <TechLabel title='Perfomance' />
            <TechLabel title='Google analytics' />
          </div>
        </TabPanel> */}
      </Tabs>

    </div>
  );
}

export default Experience;