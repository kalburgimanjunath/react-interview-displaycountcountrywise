import React from 'react';
export default function CounterView() {
  const countrylist = ['india', 'australia', 'china'];
  return (
    <div>
      {countrylist.map((item) => {
        return <div id={item}>{item}</div>;
      })}
    </div>
  );
}
