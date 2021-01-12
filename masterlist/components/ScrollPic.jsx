import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { ImgSource } from '@components/ImgSource';
import { css } from '@emotion/react';
import { useRefWithCallback } from 'core/helper/hooks';

const speakerIds = [
  187,
  823,
  1124,
  1269,
  1530,
  1725,
  2920,
  5996,
  6548,
  8367,
  8590,
  10803,
];

export default function ScrollPic() {
  const [windowTitle, setWindowTitle] = useState(0);

  const [mouseEventCount, setMouseEventCount] = useState(0);
  const handleMouseOver = useCallback((sid) => {
    setWindowTitle(sid);
  }, []);

  const [theNode, setNode] = useState(null);
  const [theTrigger, setTrigger] = useState(0);

  const handleCallback = useCallback((node) => {
    setNode(node);
    setTrigger(theTrigger + 1);
    console.log(node, 'am i set');
    return node;
  }, []);
  const [primaryRef] = useRefWithCallback(handleCallback);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    window.document.title = windowTitle + '';
  }, [windowTitle]);
  return (
    <section
      ref={primaryRef}
      css={css`
        overflow: auto;
        display: flex;
        position: relative;
        flex-wrap: wrap;
        /* flex-flow: column; */
        /* margin-bottom: 10%; */

        > div:last-of-type {
          padding-bottom: 10%;
        }
      `}
    >
      {/* <span
        css={css`
          font-size: 30px;
        `}
      >
        {mouseEventCount}
      </span> */}

      {speakerIds.map((sid) => {
        const primaryImg = `static/speakers/Speaker-${sid}.jpg`;
        const secondaryImg = `static/speakers/bw/Speaker-${sid}.jpg`;
        return (
          <div
            css={css`
              display: inline-block;
              width: 33%;
              flex-grow: 1;
              flex-basis: 33%;
            `}
            key={sid}
            onMouseOver={(e) => {
              setMouseEventCount(mouseEventCount + 1);
              console.log(sid, 'onmouse overed');
              /*
              handleMouseOver uses a state hook that sets the sid. The state doesn't change that often. so React knows to not rerender.
              But multiple set states would then rerender the component and the useEffect will keep firing. 
              Experiment withou removing windowTitle.
              */
              handleMouseOver(sid);
            }}
          >
            <ImgSource
              ref={primaryRef}
              theNode={theNode}
              theTrigger={theTrigger}
              handleCallback={handleCallback}
              primaryImg={primaryImg}
              secondaryImg={secondaryImg}
            />
          </div>
        );
      })}
    </section>
  );
}
