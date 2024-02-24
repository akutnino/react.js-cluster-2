import React, { useRef } from 'react';

const RefsDemo = function (props = {}) {
  let nameInputRef = useRef();

  const showNameEventHandler = function (event) {
    console.log(nameInputRef.current.value);
  };

  return (
    <React.Fragment>
      <h3>Name:</h3>
      <input type="text" ref={nameInputRef} />
      <button onClick={showNameEventHandler} type="button">
        Show Name
      </button>
    </React.Fragment>
  );
};

export default RefsDemo;
