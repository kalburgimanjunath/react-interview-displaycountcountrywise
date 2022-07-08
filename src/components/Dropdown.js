import React, { useState } from 'react';
export default function Dropdown({ statelist }) {
  const [count, setCount] = useState(null);
  const displayCount = () => {
    let newValue = count + 1;
    setCount(newValue);
  };
  return (
    <div>
      <div>Count: {count}</div>
      {statelist &&
        statelist.map((item) => {
          return <button onClick={displayCount}>{item}</button>;
        })}
    </div>
  );
}
