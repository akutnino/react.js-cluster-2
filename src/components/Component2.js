import React, { useState } from 'react';
import PortalComponent from './PortalComponent';
import Modal from './Modal';

const Component2 = function (prop = {}) {
  let [showModal, updateShowModal] = useState(false);

  const viewModal = function (event) {
    updateShowModal(true);
  };

  const hideModal = function (event) {
    updateShowModal(false);
  };

  return (
    <div style={{ width: '300px', position: 'relative' }}>
      <h1>This is Component 2</h1>
      <p>This is a Paragraph</p>
      <PortalComponent></PortalComponent>
      <button type="button" onClick={viewModal}>
        Show Modal
      </button>
      <Modal showModal={showModal} hideModal={hideModal}></Modal>
    </div>
  );
};

export default Component2;
