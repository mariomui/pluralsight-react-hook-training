import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from '../core/helper';
import { css, jsx } from '@emotion/react';

export const InputElement = (props) => {
  // const newProps = Object.entries(props).reduce((accum, [key, value]) => {
  //   if (key !== 'handleOnInputChange') {
  //     accum[key] = value;
  //   }
  //   return accum;
  // }, {});
  const [inputText, setInputText] = useState('');
  const [textHistory, setTextHistory] = useState([]);
  const [saveCounter, setSaveCounter] = useState(0);
  const debouncedSearch = debounce((value) => {
    console.log(value, 'saving');
    setSaveCounter(saveCounter + 1);
    setTextHistory([...textHistory, value]);
    setInputText('');
  }, 1000);
  const handleOnInputChange = useCallback(
    (e) => {
      setInputText(e.target.value);

      // if the debounce search changes the inputText and resets all the state.
      // try putting in debounced search again, the render of that state will clear stuff out.
      // it might be better to do a useEffect so that the component renders, and then we change
      // stuff.
      // setTextHistory([...textHistory, e.target.value]);
      debouncedSearch(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [textHistory.length]
  );

  useEffect(() => {
    console.log(textHistory);
    props.reportToBoo(textHistory);
  }, [textHistory.length]);
  return (
    <>
      <input
        placeholder="Enter some text"
        name="example"
        type="text"
        value={inputText}
        // {...newProps}

        onChange={handleOnInputChange}
      />
    </>
  );
};
