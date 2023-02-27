import React from 'react';

function TechLabel({title}) {
  return (
    <div className='mr-2 mb-2 italic inline-block px-3 py-px text-xs
     rounded cursor-pointer text-gray-700 dark:border dark:border-title-dark border dark:text-gray-300'>
      {title}
    </div>
  );
}

export default TechLabel;