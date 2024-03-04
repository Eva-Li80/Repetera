import React from 'react';

const AndTecken = ({ isLoggedIn }) => {
  return (
    <div className='and'>
        <h1>&& tecken</h1>
      {isLoggedIn && <p>Welcome back!</p>}
      {!isLoggedIn && <p>Please sign in.</p>}
    </div>
  );
};

export default AndTecken;
