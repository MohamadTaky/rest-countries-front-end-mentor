import { useEffect } from "react";

export default function useDebounce(callback: () => void, delay: number) {
  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
