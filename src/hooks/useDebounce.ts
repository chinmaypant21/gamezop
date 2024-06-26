import { useEffect, useState } from "react";

function useDebounce(callback: any, delay: number) {
    const [args, setArgs] = useState([]);
  
    useEffect(() => {
      if (args.length === 0) return;
  
      const handler = setTimeout(() => {
        callback(...args);
      }, delay);
  
      return () => clearTimeout(handler);
    }, [args, delay, callback]);
  
    return (...newArgs: any) => {
      setArgs(newArgs);
    };
  }
  
  export default useDebounce;