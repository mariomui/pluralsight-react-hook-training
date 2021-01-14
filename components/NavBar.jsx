import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { PageContext } from '../pages/_app';
import * as types from '../core/store/types';

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
  const { page, dispatch } = useContext(PageContext);
  const handleClick = (e) => {
    const pageName = e.currentTarget.getAttribute('data-page');
    console.log(page, 'what is this');
    dispatch({ type: types.PAGE_SET, page: pageName });
  };
  useEffect(() => {
    console.log(page, 'what am i');
  }, [page]);
  return (
    <SBar>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li data-page={'speakers'} onClick={handleClick}>
        <span>Speakers</span>
        {/* {page.page} */}
      </li>
    </SBar>
  );
};
