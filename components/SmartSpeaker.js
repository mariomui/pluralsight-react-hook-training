/* my goal is for SmartSpeaker to be the component to bus
all the data transfers between speaker card components
*/

import styled from '@emotion/styled';
import React, { forwardRef } from 'react';
import { ImgSource } from './ImgSource';
import { css } from '@emotion/react';

const SSpeakerPortrait = styled.div`
  flex-grow: 1;
  /* min-width: 33%; */
  /* display: flex; ; */
  margin: var(--gap);
  flex-basis: calc(200px - 100%) * 9999;
`;
export const SmartSpeaker = forwardRef(({ portrait, children }, ref) => {
  console.log('smart speaker renders');
  const {
    theNode,
    sid,
    theTrigger,
    handleCallback,
    primaryImg,
    secondaryImg,
  } = portrait;
  return (
    <SSpeakerPortrait
      css={css`
        /* width: 33%;
              flex-grow: 1;
              flex-basis: 33%; */
      `}
      key={sid}
      // onMouseOver={(e) => {
      //   setMouseEventCount(mouseEventCount + 1);
      //   console.log(sid, 'onmouse overed');
      //   /*
      //   handleMouseOver uses a state hook that sets the sid. The state doesn't change that often. so React knows to not rerender.
      //   But multiple set states would then rerender the component and the useEffect will keep firing.
      //   Experiment withou removing windowTitle.
      //   */
      //   handleMouseOver(sid);
      // }}
    >
      <ImgSource
        ref={ref}
        theNode={theNode}
        theTrigger={theTrigger}
        handleCallback={handleCallback}
        primaryImg={primaryImg}
        speakerId={sid}
        secondaryImg={secondaryImg}
      />
      {children}
    </SSpeakerPortrait>
  );
});
