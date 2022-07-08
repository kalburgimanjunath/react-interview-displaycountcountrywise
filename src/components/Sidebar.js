import React from 'react';

export default function Sidebar() {
  const countrylist = ['india', 'australia', 'china'];
  return (
    <div>
      {countrylist.map((item) => {
        return (
          <div>
            <a href={`#${item}`}>{item}</a>
          </div>
        );
      })}
    </div>
  );
}
