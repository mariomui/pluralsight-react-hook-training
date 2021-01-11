// import Image from 'next/image';

import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const SImgSquare = styled.div`
  position: relative;
  width: 100%;
  > img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
  > img::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`;
export const ImgSource = ({ primaryImg, secondaryImg }) => {
  const imgRef = useRef(null);
  const [isImgWithinView, setIsImgWithinView] = useState(false);

  // handles hiding our img before it is ready to load.
  const [isLoading, setIsLoading] = useState(true);

  const setPrimaryImg = () => {
    imgRef.current.src = primaryImg;
  };
  const setSecondaryImg = () => {
    imgRef.current.src = secondaryImg;
  };

  const checkIfImgInView = useCallback(() => {
    const { top, bottom } = imgRef.current.getBoundingClientRect();
    const isTopOfImgNorthOfWindow = top < 0;
    const isBottomOfImgSouthOfWindow = bottom > window.innerHeight;
    return !isTopOfImgNorthOfWindow && !isBottomOfImgSouthOfWindow;
  }, []);
  const handleScroll = useCallback(() => {
    const condition = checkIfImgInView();
    setIsImgWithinView(condition);
  }, []);

  useEffect(() => {
    // after render, show our image.
    // this allows time for the useEffect logic to either gray or color the image on load.
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // handle the toggle on mount (after render);
    setIsImgWithinView(checkIfImgInView());

    // handles the toggle on Scroll
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <SImgSquare>
      <img
        src={
          isLoading
            ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
            : !isImgWithinView
            ? secondaryImg
            : primaryImg
        }
        ref={imgRef}
        onMouseOver={setPrimaryImg}
        // onMouseOut={setSecondaryImg}
      />
    </SImgSquare>
  );
};
