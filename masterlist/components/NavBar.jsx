import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const SBar = styled.ul`
  --gap: 4rem;
  position: relative;
  display: flex;
  margin: calc(-1 * var(--gap));
  list-style: none;
  width: 100%;
  font-size: 3rem;
  li {
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
