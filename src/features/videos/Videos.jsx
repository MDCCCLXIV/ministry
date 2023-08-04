import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const Videos = () => {
  return (
    <div className='w-full h-full md:h-[85%] my-auto p-2 justify-center'>
        <div className="flex flex-col w-full md:w-[85%] mx-auto h-[95%] md:h-[90%] rounded border p-1">
            <div className="flex w-full h-[40%] md:h-[50%] p-1 rounded">
                <video className='w-full h-full object-cover object-center rounded' src="video.mp4" autoPlay controls></video>
            </div>
            <div className="flex flex-col h-[60%] p-1 mt-2 md:h-[50%]">
                <span className='flex'><AiOutlineHeart size={25} /> 43 likes</span>
                <div className="flex flex-col md:mt-2">
                    <span className='font-medium text-2xl'>Message title</span>
                    <span className='w-full text-sm mb-1 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium 
                    maiores laudantium harum alias omnis ipsum maxime molestias. Rem esse perferendis doloremque fuga officiis a fugiat
                     laborum quaerat explicabo sit.
                     </span>
                     <a className='text-sm hover:cursor-pointer hover:text-purple-600'><i>A few questions to help you process, journal or discuss the themes of this message...</i></a>
                </div>
            <button className='w-[50%] md:w-[20%] bg-purple-600 mt-auto mb-2 rounded-none'>View more</button>
            </div>
        </div>
    </div>
  )
}

export default Videos