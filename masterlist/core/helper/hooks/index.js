import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export const useRefWithCallback = (cb) => {
  /*
  the logic is that i create the ref, and a function that can acess the ref.
  setRef should be able to have access to it.
   */
  const ref = createRef(null);
  const setRef = useCallback((node) => {
    if (node) {
      cb(node);
    }
    ref.current = node;
  }, []);

  return [setRef];
};
