import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Carousel = ({ onIndexChange }) => {
  const images = ['church4.avif', 'church1.avif', 'church2.avif', 'church3.avif'];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3500); // Normal delay for transitioning to the next image

    return () => {
      resetTimeout();
    };
  }, [index, images.length]);

  useEffect(() => {
    // Call the onIndexChange function with the current index whenever it changes
    onIndexChange(index);
  }, [index, onIndexChange]);

  const Indicators = () => (
    <div className="absolute bottom-0 left-0 w-full flex justify-center mb-1">
      {images.map((_, i) => (
        <span
          key={i}
          onClick={() => setIndex(i)}
          className={`w-2 h-2 rounded-full mx-2 indicators ${
            i === index ? 'bg-red-500' : 'bg-white'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="relative flex overflow-x-hidden h-full md:w-[50%] m-auto">
      <div className="flex w-[250px] md:w-[300px] h-full md:justify-items-center transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((image, i) => (
          <div
            key={i}
            className="flex-none w-full h-full md:mx-1 bg-cover bg-no-repeat bg-center rounded-md"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="flex flex-col w-full h-full rounded-md ">
              <div className="flex justify-between">
                <span className="text-red-500 flex">
                  <AiOutlineStar className="" size={20} />
                  <AiOutlineStar size={20} />
                  <AiOutlineStar size={20} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Indicators />
    </div>
  );
};

export default Carousel;
