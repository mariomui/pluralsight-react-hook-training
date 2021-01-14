import styled from '@emotion/styled';
import React from 'react';
const SMain = styled.main`
  height: 100vh;
  width: 100%;
`;

const SContent = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  > article {
    flex-grow: 1;
    flex-basis: calc((2200px - 50%) * 999);
  }
`;
export function GeneralLayout({ contentA, contentB, children }) {
  return (
    <SMain>
      <SContent>
        {contentA}
        {children}
        {contentB}
      </SContent>
    </SMain>
  );
}
