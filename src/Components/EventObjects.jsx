import React, { useState } from 'react';


const EventObject = () => {
  const [eventInfo, setEventInfo] = useState('');

  // Event handler function
  const handleClick = (e) => {
    const info = `Button clicked! Mouse coordinates: (${e.clientX}, ${e.clientY})`;
    setEventInfo(info);
  };

  return (
    <div className='evenobj'>
      <h2>Event Listener Component</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>{eventInfo}</p>
    </div>
  );
};

export default EventObject;
