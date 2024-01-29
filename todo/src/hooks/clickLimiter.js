import { useState } from 'react';

const limitClick = () => {
  const [clickLimiter, setClickLimiter] = useState(0);
  const handleClick = () => {
    setClickLimiter(1);
  };

  return (clickLimiter, handleClick);
};

export default limitClick;
