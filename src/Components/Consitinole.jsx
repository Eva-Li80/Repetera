import React from 'react';

const Conditionale = ({ isLoggedIn }) => {
  return (
    <div className='cond'>
        <h1>Conditionale</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}
    </div>
  );
};

export default Conditionale;
