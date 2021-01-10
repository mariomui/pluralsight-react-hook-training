import React from 'react';
import styled from '@emotion/styled';

/*
i want to use smart components when 
A Smart Component is any component which manages its own state. 
Any Dumb Component will have a S prefixed for styled.
*/
const InputElement = () => {
  return (
    <input placeholder="Enter some text" name="example" type="text"></input>
  );
};
const LandingPage = () => {
  return (
    <>
      <InputElement />
    </>
  );
};

export default LandingPage;
