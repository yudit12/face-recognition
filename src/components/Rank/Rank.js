/*
Rank give you
-your user name
- your rank compere to all other users  that submitted pictures
*/

import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {console.log(entries)}
        {entries}
      </div>
    </div>
  );
}

export default Rank;