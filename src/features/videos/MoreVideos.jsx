import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

const MoreVideos = () => {
  const messages = [
    { Title: "Life with Christ", Date: "01/01/2023", image: "church2.avif" },
    { Title: "Life with Christ", Date: "01/01/2023", image: "church3.avif" },
    { Title: "Life with Christ", Date: "01/01/2023", image: "church1.avif" },
    { Title: "Life with Christ", Date: "01/01/2023", image: "church4.avif" },
    { Title: "Life with Christ", Date: "01/01/2023", image: "church1.avif" }
  ];

   return (
    <div className='w-full h-[25vh] flex flex-col py-2'>
      <div className="flex relative w-full max-w-6xl m-auto h-full border md:rounded">
        <span className="absolute font-medium text-base transform -translate-y-1/2 left-2 top-0 bg-white px-1">Messages</span>
        <a className='absolute font-medium text-purple-600 bg-white transform -translate-y-1/2 right-2 pe-2 top-0 hover:cursor-pointer text-base'>view all</a>
        <div className="flex w-full h-full overflow-x-scroll no-scrollbar">
          {messages.map((message, index) => (
            <div key={index} className="flex flex-col flex-shrink-0 w-[200px] md:w-[270px] h-[80%] p-1 m-2 rounded border mt-5">
              <div className="flex w-full h-[65%] rounded overflow-hidden">
                <img className='object-center w-full h-full object-cover' src={message.image} alt="" />
              </div>
              <div className="flex w-full h-[35%] flex-col text-sm">
                <span className='w-full h-[50%] font-medium'>{message.Title}</span>
                <span className='w-full h-[50%] flex'><AiOutlineCalendar size={20} />{message.Date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoreVideos;