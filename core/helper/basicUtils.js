/*
debounce functions have trouble with controlled inputs as synthetic events
are cached and pooled. e will always be wrong.
*/
// TODO write test on debounce function
export function debounce(fn, delay) {
  // tapping the f key fires a misssle.
  // if five seconds pass then I can fire another missle.
  // if i tap within 5 deconds, then the delay is reset.
  let clearTimeoutId = null;

  const debouncedFn = (...args) => {
    if (clearTimeoutId) {
      clearTimeout(clearTimeoutId);
      clearTimeoutId = null;
    }
    clearTimeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
  return debouncedFn;
}

export function throttle() {
  // if function fires then push
}
