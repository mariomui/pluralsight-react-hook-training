import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { ImgSource } from './layouts/ImgSource';
import { css } from '@emotion/react';

export default function ScrollPic() {
  const [windowTitle, setWindowTitle] = useState(0);

  const [mouseEventCount, setMouseEventCount] = useState(0);
  const handleMouseOver = useCallback((sid) => {
    setWindowTitle(sid);
  }, []);

  const primaryRef = createRef(null);

  useEffect(() => {
    window.document.title = windowTitle + '';
    console.log(windowTitle, 'setting useeffect in windowtitle');
  }, [windowTitle]);
  return (
    <section
      ref={primaryRef}
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
      <span
        css={css`
          font-size: 30px;
        `}
      >
        {mouseEventCount}
      </span>

      {[187, 823, 1124, 1269].map((sid) => {
        const primaryImg = `static/speakers/Speaker-${sid}.jpg`;
        const secondaryImg = `static/speakers/bw/Speaker-${sid}.jpg`;
        return (
          <div
            css={css`
              display: inline-block;
              width: 50%;
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
              src={secondaryImg}
              primaryImg={primaryImg}
              secondaryImg={secondaryImg}
            />
          </div>
        );
      })}
    </section>
  );
}
