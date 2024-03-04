import React from 'react';

const Conditionale = ({ isLoggedIn }) => {
  return (
    <div>
        <h1>conditionale</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}
    </div>
  );
};

export default Conditionale;
