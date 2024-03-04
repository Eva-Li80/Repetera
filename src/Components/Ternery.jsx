import React from "react";

const Ternery = ({ isLoggedIn }) => {
  const greetingMessage = isLoggedIn ? 'Welcome back!' : 'Please sign in.';
  return (
    <div className="terner">
      <p>{greetingMessage}</p>
    </div>
  );
};

export default Ternery;
