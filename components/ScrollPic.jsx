import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { ImgSource } from '@/components/ImgSource';
import { css } from '@emotion/react';
import { useRefWithCallback } from 'core/helper/hooks';
import { SmartSpeaker } from '@/components/SmartSpeaker';
import { SpeakerDatas } from '@/core/models/SpeakerDatas';

const speakerIds = [
  187,
  823,
  1124,
  1269,
  1530,
  1725,
  5996,
  6548,
  8367,
  8590,
  10803,
  10808,
  18805,
  41808,
];
const SPortraitGallery = styled.section`
  display: flex;
  --gap: 1rem;
  flex-wrap: wrap;
  margin: calc(var(--gap) * -1);
`;

export default function ScrollPic() {
  console.log('scroll pic component renders');
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
  }, []);

  useEffect(() => {
    window.document.title = windowTitle + '';
    console.log('use effect is being called in scrollPic as sid changes');
  }, [windowTitle]);
  const filteredSpeakerDatas = SpeakerDatas.filter((speakerData) => {
    return speakerData;
  });
  return (
    <SPortraitGallery
      ref={primaryRef}
      css={css`
        /* overflow: auto; */
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

      {filteredSpeakerDatas.map((speakerData) => {
        const { id: sid, firstName, lastName } = speakerData;
        const primaryImg = `static/speakers/Speaker-${sid}.jpg`;
        const secondaryImg = `static/speakers/bw/Speaker-${sid}.jpg`;
        const portrait = { primaryImg, secondaryImg, sid };
        return (
          <SmartSpeaker ref={primaryRef} portrait={portrait}>
            <div>{`${firstName}, ${lastName}`}</div>
          </SmartSpeaker>
        );
      })}
    </SPortraitGallery>
  );
}
