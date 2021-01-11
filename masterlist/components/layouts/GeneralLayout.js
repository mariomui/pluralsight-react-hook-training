import styled from '@emotion/styled';
const SMain = styled.main`
  height: 100vh;
  width: 100vw;
`;

export function GeneralLayout({ children }) {
  return <SMain>{children}</SMain>;
}
