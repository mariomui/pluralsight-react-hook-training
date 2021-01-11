import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { debounce } from '../core/helper';
import { GeneralLayout } from '../components/layouts/GeneralLayout';
import { css, jsx } from '@emotion/react';

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
  height: 90%;
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

const SInputCol = styled.div`
  display: flex;
  flex-flow: column;
  align-items: space-between;
  justify-content: center; // columns uses this to vertically center;
  outline: 1px solid white;
  flex: 0 0 25%;
  height: 90%;
`;
const STextHistoryBox = styled.div`
  display: flex;
  flex-flow: column;
  /* align-items: space-between; */
  justify-content: center; // columns uses this to vertically center;
  outline: 1px solid white;
  flex: 0 0 25%;
`;
const Index = () => {
  // i have to debounce the handler.
  const [inputText, setInputText] = useState('');
  const [textHistory, setTextHistory] = useState([]);
  const [saveCounter, setSaveCounter] = useState(0);
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
  //   []21
  // );

  const debouncedSearch = useCallback(
    debounce((value) => {
      console.log(value, 'saving');
      console.log(textHistory.concat(value), 'concatted value');
      setSaveCounter(saveCounter + 1);
      setTextHistory([...textHistory, value]);
    }, 200),
    []
  );
  const handleOnInputChange = useCallback((e) => {
    setInputText(e.target.value);
    debouncedSearch(e.target.value);

    // if the debounce search changes the inputText and resets all the state.
    // try putting in debounced search again, the render of that state will clear stuff out.
    // it might be better to do a useEffect so that the component renders, and then we change
    // stuff.
    // setTextHistory([...textHistory, e.target.value]);
  }, []);

  useEffect(() => {
    console.log(saveCounter, 'does counter reset');
    if (inputText.length) {
      setTextHistory([...textHistory, inputText]);
    } else {
      console.log('khnb ');
    }
  }, [saveCounter]);

  return (
    <GeneralLayout>
      <SContent>
        <STopBanner>
          <STopContainer>
            <SInputCol>
              <SInputElement
                placeholder="Enter some text"
                onChange={handleOnInputChange}
                name="example"
                type="text"
                value={inputText}
              />
              <span
                css={css`
                  min-height: 10%;
                `}
              >
                {inputText}
              </span>
            </SInputCol>
          </STopContainer>
        </STopBanner>
        <SListedText>
          <SBottomContainer>
            <STextHistoryBox>
              {textHistory.map((text, i) => {
                return <div key={i}>{text}</div>;
              })}
            </STextHistoryBox>
          </SBottomContainer>
        </SListedText>
      </SContent>
    </GeneralLayout>
  );
};

export default Index;
