// import Image from 'next/image';

import styled from '@emotion/styled';
import React, { useRef } from 'react';

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
export const ImgSource = ({ primaryImg, secondaryImg }) => {
  const imgRef = useRef(null);
  const setPrimaryImg = () => {
    imgRef.current.src = primaryImg;
  };
  const setSecondaryImg = () => {
    imgRef.current.src = secondaryImg;
  };
  return (
    <SImgSquare>
      <img
        src={secondaryImg}
        ref={imgRef}
        onMouseOver={setPrimaryImg}
        onMouseOut={setSecondaryImg}
      ></img>
    </SImgSquare>
  );
};
