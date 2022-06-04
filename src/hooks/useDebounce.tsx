import { useRef } from 'react';

const useDebounce = (
  callback: (e: string) => void,
  delay: number
): ((value: string) => void) => {
  const ref = useRef<number | undefined>(0);
  return function debounced(value) {
    clearTimeout(ref.current);
    const timeout: any = setTimeout(() => {
      callback(value);
    }, delay);
    ref.current = timeout;
  };
};

export default useDebounce;
