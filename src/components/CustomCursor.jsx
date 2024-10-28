import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Use `mousemove` to follow the cursor directly without delay
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className='fixed top-0 left-0 w-8 h-8 rounded-full bg-primary opacity-75 pointer-events-none'
      style={{ transform: 'translate(-50%, -50%)' }}
    ></div>
  );
};

export default CustomCursor;
