import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { debounce } from '../core/helper';

/*
A Smart Component is any component which manages its own state. 
Any Dumb Component will have a S prefixed for styled.
*/
const SInputElement = styled.input`
  font-size: 1rem;
  color: green;
`;

const LandingPage = () => {
  // i have to debounce the handler.
  const [inputText, setInputText] = useState('');
  const debouncedSearch = useCallback(
    debounce((value) => {
      console.log(value, 'saving');
    }, 1200),
    []
  );
  const handleOnInputChange = (e) => {
    setInputText(e.target.value);
    debouncedSearch(e.target.value);
  };
  return (
    <>
      <SInputElement
        onChange={handleOnInputChange}
        placeholder="Enter some text"
        name="example"
        type="text"
        value={inputText}
      />
    </>
  );
};

export default LandingPage;
