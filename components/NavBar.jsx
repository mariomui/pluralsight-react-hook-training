import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const SBar = styled.ul`
  --gap: 0.5rem;
  position: relative;
  display: flex;
  margin: calc(var(--gap * -1));
  list-style: none;
  width: 0;
  font-size: 1rem;
  > li {
    margin: var(--gap);
  }
`;
export const NavBar = () => {
  return (
    <SBar>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/ScrollPic">
          <a>Speakers</a>
        </Link>
      </li>
    </SBar>
  );
};
