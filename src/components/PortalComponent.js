import React from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = function (props = {}) {
  return ReactDOM.createPortal(
    <div>
      <h1>This is a Portal Component</h1>
    </div>,
    document.querySelector('#root-portal')
  );
};

export default PortalComponent;
