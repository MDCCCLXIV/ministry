import React from 'react'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import MoreVideos from '../features/videos/MoreVideos'
// import Menu from '../components/menu/Menu'

const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <Hero />
      <Services />
      <MoreVideos />


        
    </div>
  )
}

export default Home