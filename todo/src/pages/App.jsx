import './App.css';
import React, { useState } from 'react';
import Popup from '../components/Popup/Popup';
import Button from '../components/Button/Button';
// import Input from '../components/Input/Input';

function App() {
  const [show, setShow] = useState(false);
  const showPopup = () => {
    setShow(true);
  };
  return (
    <>
      <Button handleClick={showPopup} styles="small">Show</Button>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10rem',
      }}
      >
        <Popup styles="success" popupShow={true || show}>This is Success Popup Message</Popup>
        <Popup styles="danger" popupShow={true || show}>This is Danger Popup Message</Popup>
        <Popup styles="warning" popupShow={show || true}>This is Warning Popup Message</Popup>
      </div>
    </>
  );
}

export default App;
