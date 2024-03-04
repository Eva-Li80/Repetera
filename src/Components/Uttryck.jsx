import React from "react";



const Uttryck = () => {
  const uttryck = (a, b) => {
    const sum = a + b;

    return sum;
  };

  const element = <p>summan av talen är : {uttryck(2, 3)}</p>;

  return <div className="uttryck">{element}</div>;
};

export default Uttryck;
