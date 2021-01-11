import styled from '@emotion/styled';
const SMain = styled.main`
  height: 100%;
`;

export function GeneralLayout({ children }) {
  return <SMain>{children}</SMain>;
}
