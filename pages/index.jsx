import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { debounce } from '../core/helper';
import { GeneralLayout } from '../components/layouts/GeneralLayout';
import { css, jsx } from '@emotion/react';
import { InputElement } from '@components/InputText';
import { RDate } from '@components/RDate';
import { NavBar } from '@components/NavBar';
import ScrollPic from '@components/ScrollPic';

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
  justify-content: space-around;
  align-items: center;
  height: 100%;

  flex-wrap: wrap;
  > * {
    flex-basis: calc(415px - 100%) * 999;
    flex-grow: 1;
  }
`;
const SBottomContainer = styled(SContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1em 0em;
  /* height: 90%; */
  flex-flow: column;
  flex-grow: 1;
`;

const SContent = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  > article {
    flex-grow: 1;
    flex-basis: calc((2200px - 50%) * 999);
  }
`;
const STopBanner = styled.article`
  background: greenyellow;
  width: 100%;
  /* height: 25%; */
  font-size: 1rem;
  align-items: center;
  padding: 2em 0em;
`;

const SListedText = styled.article`
  background: lightyellow;
  /* height: 75%; */
`;

const SLeftDAteTimeCol = styled.div`
  display: flex;
  align-items: center;
  /* flex: 0 0 30%; */
  /* width: 50%; */
`;
const SInputCol = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: space-between;
  justify-content: center; // columns uses this to vertically center;
  /* flex: 0 0 40%; */
  /* width: 50%; */
`;
const STitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const SInputElementContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  margin-left: 0;
`;
const STextHistoryBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* align-items: space-between; */
  justify-content: space-around; // columns uses this to vertically center;
  outline: 1px solid white;
  flex: 0 0 25%;
  div + div {
    margin-left: 1rem;
  }
`;

const outside = () => {};
const Index = () => {
  // i have to debounce the handler.
  console.log('how many times does Index component rerender');
  const [inputText, setInputText] = useState('');
  const [textHistory, setTextHistory] = useState([]);
  /*
  everytime a prop renders the function gets activated.
  The callback is a simple ignore flag.
  onChange, the text goes to state.
  The state goes to dom.
  the dom renders the state. 
  this is not a good example of how to useCallback though. dammit.
  */
  /*
  const debouncedSearch = useCallback(
    debounce((value) => {
      console.log(value, 'saving');
    }, 1200),
    []21
  );
  */
  const random = Number(Math.random().toFixed(2).split('.')[1]);
  const [isLoading, setIsLoading] = useState(true);

  // on first load, texthistorylen is 0. all functions are rendered.
  // handleinputchange function is created. The keys keep hammering away but the function
  // still uses the same setinputtext and the same debouncedSearch. So debounce works.
  // At the end of the debounce, history.length changes.
  // The next time handle on input change renders, a new function is fired, in the newer
  // context. The one with a  populated text history.
  // useEffect(() => {
  //   debouncedSearch(inputText);
  // }, [inputText]);
  const reportToBoo = useCallback((data) => {
    setTextHistory(data);
  }, []);
  return (
    <GeneralLayout>
      <SContent>
        <STopBanner>
          <STopContainer>
            <SLeftDAteTimeCol>
              <RDate />
            </SLeftDAteTimeCol>
            <SInputCol>
              <STitle>Mario's Hooks School</STitle>
              <SInputElementContainer>
                <InputElement
                  reportToBoo={reportToBoo}
                  css={css`
                    font-size: 1rem;
                  `}
                  // placeholder="Enter some text"
                  // handleOnInputChange={handleOnInputChange}
                  // name="example"
                  // type="text"
                  // value={inputText}
                />
              </SInputElementContainer>
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
                return (
                  <div
                    css={css`
                      height: unset;
                    `}
                    key={i}
                  >
                    {text}
                  </div>
                );
              })}
            </STextHistoryBox>
            <NavBar></NavBar>
            <ScrollPic></ScrollPic>
            {/* speaker */}
          </SBottomContainer>
        </SListedText>
      </SContent>
    </GeneralLayout>
  );
};

export default Index;
