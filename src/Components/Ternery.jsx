import React from "react";

const Ternery = ({ isLoggedIn }) => {
  const greetingMessage = isLoggedIn ? 'Welcome back!' : 'Please sign in.';
  return (
    <div>
      <p>{greetingMessage}</p>
    </div>
  );
};

export default Ternery;
