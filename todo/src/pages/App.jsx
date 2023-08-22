import './App.css';
import React from 'react';
import Button from '../components/Button/Button';

function App() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Button styles="small">Small</Button>
      <Button styles="medium">Medium</Button>
      <Button>Default</Button>
    </div>
  );
}

export default App;
