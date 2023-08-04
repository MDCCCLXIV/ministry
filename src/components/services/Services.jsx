import React from 'react'
import Videos from '../../features/videos/Videos'
import MoreVideos from '../../features/videos/MoreVideos'

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
         <div className="block md:flex md:mx-auto md:max-w-6xl w-full h-full md:h-[90%] md:my-auto justify-between">
          <div className="flex flex-col md:h-full w-full h-[32%] md:w-[30%] pt-3 md:pt-0 md:justify-center ">
              <span className='font-medium text-lg mb-3 text-center md:text-start text-purple-600 uppercase'>unlimited content</span>
              <span className='text-4xl md:w-[65%] text-center md:text-start w-full mb-3 uppercase'>Focused on improving ?</span>
              <p className='text-sm md:w-[90%] md:text-start text-center my-1 p-1'>Stream unlimited shows, listen to truth-seeking podcasts, and read articles you can relate to with your
                 free subscription. You can also browse our ever-expanding catalog of teachers and authors — normal people 
                willing to share their life experiences with you.
              </p>
          </div>
          <div className="flex md:h-full w-full h-[68%] md:w-[70%] justify-center ">
              <Videos />
          </div>
         </div>
    </div>
  )
}

export default Services