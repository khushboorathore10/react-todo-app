import React, { useState } from 'react';

export const IncrementComponent = ( props ) => {
  const [localCount, setLocalCount] = useState(props.count);

  const handleIncrement = () => {
    const newCount = localCount + 1;
    setLocalCount(newCount);
    props.setCount(newCount);
  };

  return (
    <>
      <div>Increment Count: {localCount}</div>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};
