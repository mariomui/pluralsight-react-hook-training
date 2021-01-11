import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ImgSource } from '../components/layouts/ImgSource';
import { css } from '@emotion/react';
// import speaker1 from '@images/speakers/Speaker-187.jpg';

export default function ScrollPic() {
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
          <ImgSource
            key={sid}
            src={secondaryImg}
            primaryImg={primaryImg}
            secondaryImg={secondaryImg}
          />
        );
      })}
    </section>
  );
}
