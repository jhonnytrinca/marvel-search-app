import { useEffect } from 'react';

type Callback = (e: KeyboardEvent) => void;

const useOnKeyDown = (key: string, callback: Callback) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === key && callback(e);
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
};

export default useOnKeyDown;
