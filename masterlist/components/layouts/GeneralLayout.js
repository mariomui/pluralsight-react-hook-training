import styled from '@emotion/styled';
import React from 'react';
const SMain = styled.main`
  height: 100vh;
  width: 100%;
`;

export function GeneralLayout({ children }) {
  return <SMain>{children}</SMain>;
}
