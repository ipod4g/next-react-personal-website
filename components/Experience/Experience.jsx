import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TechLabel from '../shared/TechLabel';


function Experience(props) {
  return (
    <div className='mb-6'>
        <h2 className='text-title uppercase font-bold mb-2'>Experience</h2>
        <p className='mb-6'>you can 
        <a href="https://drive.google.com/file/d/1AdZjozv-neOI4acQAz6ME-rP9sEDU8dW/view?usp=sharing" target='_blank' className='font-bold'> view
        </a> or <a href="https://drive.google.com/file/d/1AdZjozv-neOI4acQAz6ME-rP9sEDU8dW/view?usp=sharing" target='_blank' className='font-bold'>download</a>  the resume</p>
        <Tabs className='flex'>
        <TabList className='flex flex-col shrink-0' >
          <Tab selectedClassName="border-l-red-600 [&>p]:text-red-600 [&>p]:font-bold" className='flex px-4 items-center h-10 border-l-[2px] cursor-pointer outline-none'>
            <p>2016</p>
          </Tab>
          <Tab selectedClassName="border-l-red-600 [&>p]:text-red-600 [&>p]:font-bold" className='flex px-4 items-center h-10 border-l-[2px] cursor-pointer outline-none'>
            <p>2017</p>
          </Tab>
          <Tab selectedClassName="border-l-red-600 [&>p]:text-red-600 [&>p]:font-bold" className='flex px-4 items-center h-10 border-l-[2px] cursor-pointer outline-none'>
            <p>2022</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className='ml-4'>
            <h2 className='font-bold'>Software Engineer | <span className='font-bold text-links'> <a className='hover:underline' href="https://www.softserveinc.com" target="_blank">Softserve</a></span></h2>
            <p className='mb-4 text-sm'>Apl 2016 - Jun 2017</p>
            <ul className='mb-4'>
              <li>Completely change UI design, adding new functionality, 
                taking part in developing feature, bug fixing, develop responsive design 
                </li>
                <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, 
                reprehenderit nostrum tenetur atque explicabo iusto animi laborum 
                tempora quis non incidunt itaque dolorem quidem exercitationem corrupti voluptates? Quas, fuga saepe.
                </li>
            </ul>
            <TechLabel title='React' />
            <TechLabel title='HTML/CSS3' />
            <TechLabel title='JavaScript' />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='ml-4'>
            <h2 className='font-bold'>Software Engineer | <span className='font-bold text-links'><a href="https://www.n-ix.com" target="_blank">N-IX</a>   </span></h2>
            <p className='mb-4 text-sm'>Jun 2017 - Sept 2018</p>
            <ul className='mb-4'>
              <li>
                Developing project from Scratch using React/Redux and neo4j as database. Create clear and reusable components, good project structure, implement design, developing features
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, 
                reprehenderit nostrum tenetur atque explicabo iusto animi laborum 
                tempora quis non incidunt itaque dolorem quidem exercitationem corrupti voluptates? Quas, fuga saepe.
                </li>
            </ul>
            <TechLabel title='React' />
            <TechLabel title='Redux' />
            <TechLabel title='JavaScript' />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='ml-4'>
            <h2 className='font-bold'>Software Engineer | <span className='font-bold text-links'><a href="https://www.matchoffice.com" target="_blank">MatchOffice</a></span></h2>
            <p className='mb-4 text-sm'>Sept 2018 - till now</p>
            <ul className='mb-4'>
              <li>Build scalability and reusable components, implement design, developing new features, working with improvement of side speed</li>
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
        </TabPanel>
      </Tabs>

    </div>
  );
}

export default Experience;