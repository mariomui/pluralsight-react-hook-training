import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const SBar = styled.ul``;
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
