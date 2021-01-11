import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ImgSource } from '../components/layouts/ImgSource';
import { css } from '@emotion/react';
// import speaker1 from '@images/speakers/Speaker-187.jpg';

export default function ScrollPic() {
  const [windowTitle, setWindowTitle] = useState(0);

  const handleMouseOver = useCallback((sid) => {
    setWindowTitle(sid);
  }, []);

  useEffect(() => {
    window.document.title = windowTitle + '';
    console.log(windowTitle, 'setting useeffect in windowtitle');
  }, [windowTitle]);
  return (
    <section
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
      {[187, 823, 1124, 1269].map((sid) => {
        const primaryImg = `static/speakers/Speaker-${sid}.jpg`;
        const secondaryImg = `static/speakers/bw/Speaker-${sid}.jpg`;
        return (
          <div
            key={sid}
            onMouseOver={(e) => {
              console.log(sid, 'onmouse overed');
              handleMouseOver(sid);
            }}
          >
            <ImgSource
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
