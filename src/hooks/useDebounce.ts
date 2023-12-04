import { useEffect, useRef } from "react";

export default function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const debouncedCallback = (...args: any[]) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debouncedCallback;
}
