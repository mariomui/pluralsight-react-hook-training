import React from 'react';
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
      `}
    >
      <ImgSource
        primaryImg="static/speakers/Speaker-187.jpg"
        secondaryImg="static/speakers/bw/Speaker-187.jpg"
      />
      <ImgSource
        primaryImg="static/speakers/Speaker-823.jpg"
        secondaryImg="static/speakers/bw/Speaker-823.jpg"
      />
      <ImgSource
        primaryImg="static/speakers/Speaker-1124.jpg"
        secondaryImg="static/speakers/bw/Speaker-1124.jpg"
      />
      <ImgSource
        primaryImg="static/speakers/Speaker-1269.jpg"
        secondaryImg="static/speakers/bw/Speaker-1269.jpg"
      />
    </section>
  );
}
