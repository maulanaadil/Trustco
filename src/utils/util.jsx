import { useLayoutEffect, useState } from 'react';

export const useSizeComponents = (ref) => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect((ref) => {
    const updateSize = () => {
      let newSize = [window.innerWidth, window.innerHeight];
      if (ref?.current) {
        newSize = [ref.current.offsetWidth, ref.current.offsetHeight];
      }
      setSize(newSize);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
