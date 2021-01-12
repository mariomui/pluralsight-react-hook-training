import React from 'react';

const date = new Date();
export const RDate = () => {
  return <span>{date.toDateString()}</span>
}