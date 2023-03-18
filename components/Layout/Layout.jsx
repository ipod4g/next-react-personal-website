import { Fragment } from 'react'
import Navigation from '../shared/Navigation';
import Footer from '../Footer/Footer'

function Layout(props) {
  return (
    <Fragment>
      <Navigation />
    
      <div className='content-wrapper'>
        <main className='flex flex-col flex-1 justify-start items-start max-w-2xl mx-auto px-4 sm:px-6 mt-24'>
          {props.children}
        </main>
        <Footer />
      </div>
      
    </Fragment>
  )
}

export default Layout