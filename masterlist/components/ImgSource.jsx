// import Image from 'next/image';

import styled from '@emotion/styled';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

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
export const ImgSource = forwardRef((props, ref) => {
  const { theNode, theTrigger, primaryImg, secondaryImg } = props;
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

  const checkIfImgInView = useCallback((theNode) => {
    const { top, bottom, x, y } = imgRef.current.getBoundingClientRect();
    // const { top: rtop, bottom: rbottom } = theNode.getBoundingClientRect();
    const rtop = 0;
    console.log(top, bottom, x, y);
    const rbottom = window.innerHeight;
    // console.log(ref.current, rtop, rbottom);
    const isTopOfImgNorthOfWindow = top < rtop;
    const isBottomOfImgSouthOfWindow = bottom > rbottom;
    const condition = !isTopOfImgNorthOfWindow && !isBottomOfImgSouthOfWindow;
    console.log(condition);
    return condition;
  }, []);
  const handleScroll = useCallback(
    () => {
      if (theNode && theTrigger > 0) {
        // console.log(ref, theNode, 'reg');
        setIsImgWithinView(checkIfImgInView(theNode));
      }
    },
    [
      // theTrigger
    ]
  );

  useEffect(() => {
    // after render, show our image.
    // this allows time for the useEffect logic to either gray or color the image on load.
    setIsLoading(false);
  }, []);

  useEffect(
    () => {
      // handle the toggle on mount (after render);
      let $copyref;
      // if (theTrigger > 0 && theNode) {
      // console.log(theNode);
      setIsImgWithinView(checkIfImgInView(theNode));
      console.log(document.querySelector('main'));
      window.document.addEventListener('scroll', handleScroll);
      $copyref = theNode;
      // }

      // handles the toggle on Scroll
      return function cleanup() {
        // $copyref && $copyref.removeEventListener('scroll', handleScroll);
        window.document.removeEventListener('scroll', handleScroll);
      };
    },
    [
      // theTrigger
    ]
  );
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
});
