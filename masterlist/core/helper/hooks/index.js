import { useEffect, useMemo } from 'react';

// terrible.
export function useDebounce(fn, delay) {
  const [timeoutId, setTimeoutID] = useState(null);
  // call the function
  return (
    useMemo((...args) => {
      return fn(...args);
    }),
    [fn]
  );
}
