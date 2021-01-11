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
`;
const STopContainer = styled(SContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const SBottomContainer = styled(SContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2em 0em;
`;

const SContent = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  > article {
    flex-grow: 1;
    flex-basis: calc((2200px - 100%) * 999);
  }
`;
const STopBanner = styled.article`
  background: greenyellow;
  height: 25%;

  align-items: center;
`;

const SListedText = styled.article`
  background: lightyellow;
  height: 75%;
`;

const STopText = styled.div``;

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
          <STopContainer>
            <SInputElement
              placeholder="Enter some text"
              onChange={handleOnInputChange}
              name="example"
              type="text"
              value={inputText}
            />
          </STopContainer>
        </STopBanner>
        <SListedText>
          <SBottomContainer>{inputText}</SBottomContainer>
        </SListedText>
      </SContent>
    </GeneralLayout>
  );
};

export default Index;
