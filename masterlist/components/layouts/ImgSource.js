// import Image from 'next/image';

import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';

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
    padding-bottom: 100%;
  }
`;
export const ImgSource = ({
  currentScrollYPosition,
  primaryImg,
  secondaryImg,
}) => {
  const imgRef = useRef(null);

  const setPrimaryImg = () => {
    imgRef.current.src = primaryImg;
  };
  const setSecondaryImg = () => {
    imgRef.current.src = secondaryImg;
  };
  useEffect(() => {
    const dim = imgRef.current.getBoundingClientRect();
    console.log(primaryImg, dim, currentScrollYPosition);
    if (dim.y > -200 && dim.y < 200) {
      imgRef.current.src = primaryImg;
      console.log(dim.top, currentScrollYPosition);
      console.log('erueka');
    } else {
      imgRef.current.src = secondaryImg;
    }
  }, [currentScrollYPosition]);
  return (
    <SImgSquare>
      <img
        src={secondaryImg}
        ref={imgRef}
        onMouseOver={setPrimaryImg}
        // onMouseOut={setSecondaryImg}
      ></img>
    </SImgSquare>
  );
};
