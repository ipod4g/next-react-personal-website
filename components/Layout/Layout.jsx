import { Fragment } from 'react'
import Navigation from '../shared/Navigation'

function Layout(props) {
  return (
    <Fragment>
      <Navigation />

      <main className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout