'use client'

import { useSpring, animated } from "@react-spring/web";

const FaqCards = ({ title, icon, onClick, expanded }) => {
  const spring = useSpring({
    opacity: 1,
    height: 'auto',
   
  });

  return (
    <animated.div
      style={spring}
      className='bg-white shadow-md dark:text-black rounded-lg p-6 flex items-center justify-between cursor-pointer'
      onClick={onClick}
    >
      <h3 className='font-bold'>{title}</h3>
      {expanded ? (
        <p className='text-3xl font-light'>-</p>
      ) : (
        <p className='text-3xl font-light'>+</p>
      )}
    </animated.div>
  );
};

export default FaqCards;
