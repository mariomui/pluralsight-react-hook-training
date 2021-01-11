import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { debounce } from '../core/helper';
import { GeneralLayout } from '../components/layouts/GeneralLayout';

/*
A Smart Component is any component which manages its own state. 
Any Dumb Component will have a S prefixed for styled.
*/
const SInputElement = styled.input`
  font-size: 1rem;
  position: relative;
  color: green;
  height: 2em;
`;

const SContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  border: 1px solid blue;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  display: flex;
`;
const SContent = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
`;
const STopBanner = styled.article`
  background: greenyellow;
  /* flex: 0 0 100%; */
  width: 100%;

  height: 25%;
  align-items: center;
`;
const Index = () => {
  // i have to debounce the handler.
  const [inputText, setInputText] = useState('');
  /*
  everytime a prop renders the function gets activated.
  The callback is a simple ignore flag.
  onChange, the text goes to state.
  The state goes to dom.
  the dom renders the state. 
  this is not a good example of how to useCallback though. dammit.
  */
  // const debouncedSearch = useCallback(
  //   debounce((value) => {
  //     console.log(value, 'saving');
  //   }, 1200),
  //   []
  // );

  const debouncedSearch = debounce((value) => {
    console.log(value, 'saving');
  }, 1000);
  const handleOnInputChange = useCallback((e) => {
    setInputText(e.target.value);
    debouncedSearch(e.target.value);
  }, []);

  return (
    <GeneralLayout>
      <SContent>
        <STopBanner>
          <SContainer>
            <SInputElement
              placeholder="Enter some text"
              onChange={handleOnInputChange}
              name="example"
              type="text"
              value={inputText}
            />
          </SContainer>
        </STopBanner>
      </SContent>
    </GeneralLayout>
  );
};

export default Index;
