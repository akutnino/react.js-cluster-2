import React from 'react';
import Component2 from './Component2';

const Component1 = function (prop = {}) {
  return (
    <React.Fragment>
      <h1>This is Component 1</h1>
      <Component2></Component2>
    </React.Fragment>
  );
};

export default Component1;
