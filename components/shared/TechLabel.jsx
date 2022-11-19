import React from 'react';

function TechLabel({title}) {
  return (
    <div className='mr-2 hover:scale-105 italic inline-block px-3 py-0.5 bg-chat-button text-xs rounded-lg cursor-pointer text-white'>{title}</div>
  );
}

export default TechLabel;