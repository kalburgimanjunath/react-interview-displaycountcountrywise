import React from 'react';
import Dropdown from './Dropdown';
import CounterView from './CounterView';
export default function Container() {
  const statelist = ['hubli', 'dharwad', 'haveri'];
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <Dropdown statelist={statelist} />
      <CounterView />
    </div>
  );
}
