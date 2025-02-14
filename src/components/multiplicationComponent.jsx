import React, { useState } from 'react';

export const MultiplicationComponent = (props) => {
  const [localCount, setLocalCount] = useState(props.count+1);

  const handleMultiplication = () => {
    const newCount = localCount * 5;
    setLocalCount(newCount);
    props.setCount(newCount);
  };

  return (
    <>
      <div>Multiplication Count: {localCount}</div>
      <button onClick={handleMultiplication}>Multiply by 5</button>
    </>
  );
};
