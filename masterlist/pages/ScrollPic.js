import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ImgSource } from '../components/layouts/ImgSource';
import { css } from '@emotion/react';
// import speaker1 from '@images/speakers/Speaker-187.jpg';

export default function ScrollPic() {
  // listen to scroll
  const [currentScrollYPosition, setCurrentScrollYPosition] = useState(0);
  const scrollRef = useRef(null);
  const handleScroll = useCallback(function (e) {
    setCurrentScrollYPosition(e.target.scrollTop);
  }, []);
  useEffect(() => {
    const $listen = scrollRef?.current;
    if ($listen) {
      $listen.addEventListener('scroll', handleScroll);
      return function cleanup() {
        $listen.removeEventListener('scroll', handleScroll);
      };
    } else {
      console.log('no dom');
    }
  }, []);
  // get position.
  // report position to img sources.
  // if image sources are in the same position as the scroll, then light up.

  return (
    <section
      ref={scrollRef}
      css={css`
        overflow: auto;
        display: flex;
        position: relative;
        flex-flow: column;
        margin-bottom: 10%;
        > div:last-of-type {
          padding-bottom: 10%;
        }
      `}
    >
      <ImgSource
        currentScrollYPosition={currentScrollYPosition}
        primaryImg="static/speakers/Speaker-187.jpg"
        secondaryImg="static/speakers/bw/Speaker-187.jpg"
      />
      <ImgSource
        currentScrollYPosition={currentScrollYPosition}
        primaryImg="static/speakers/Speaker-823.jpg"
        secondaryImg="static/speakers/bw/Speaker-823.jpg"
      />
      <ImgSource
        currentScrollYPosition={currentScrollYPosition}
        primaryImg="static/speakers/Speaker-1124.jpg"
        secondaryImg="static/speakers/bw/Speaker-1124.jpg"
      />
      <ImgSource
        currentScrollYPosition={currentScrollYPosition}
        primaryImg="static/speakers/Speaker-1269.jpg"
        secondaryImg="static/speakers/bw/Speaker-1269.jpg"
      />
    </section>
  );
}
