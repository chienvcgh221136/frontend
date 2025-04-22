import React from 'react'
import Hero from '../components/Hero'

import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7'>
      <Hero/>
      <Footer/>

    </div>
  )
}

export default Home
