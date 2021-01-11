// import Image from 'next/image';

import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef } from 'react';

const SImgSquare = styled.div`
  position: relative;
  width: 100%;
  > img {
    max-width: 100%;
    width: 50%;
    height: auto;
  }
  > img::after {
    display: block;
    content: '';
    padding-bottom: 25%;
  }
`;
export const ImgSource = ({ primaryImg, secondaryImg }) => {
  const imgRef = useRef(null);

  const setPrimaryImg = () => {
    imgRef.current.src = primaryImg;
  };
  const setSecondaryImg = () => {
    imgRef.current.src = secondaryImg;
  };
  const handleScroll = () => {
    console.log('hi');
    // const { top, bottom } = imgRef.current.getBoundingClientRect();
    // const isTopOfImgNorthOfWindow = top < 0;
    // const isBottomOfImgSouthOfWindow = bottom > window.innerHeight;
    // const condition = !isTopOfImgNorthOfWindow && !isBottomOfImgSouthOfWindow;
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <SImgSquare>
      <img
        src={secondaryImg}
        ref={imgRef}
        onMouseOver={setPrimaryImg}
        // onMouseOut={setSecondaryImg}
      />
    </SImgSquare>
  );
};
