import React from 'react';

function TechLabel({title}) {
  return (
    <div className='mr-2 italic inline-block px-3 py-px text-xs rounded cursor-pointer border'>{title}</div>
  );
}

export default TechLabel;