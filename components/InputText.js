import React from 'react';

export const InputElement = (props) => {
  const newProps = Object.entries(props).reduce((accum, [key, value]) => {
    if (key !== 'handleOnInputChange') {
      accum[key] = value;
    }
    return accum;
  }, {});

  return (
    <input
      // placeholder="Enter some text"
      // onChange={handleOnInputChange}
      // name="example"
      // type="text"
      // value={inputText}
      {...newProps}
      onChange={props.handleOnInputChange}
    />
  );
};
