import React, { useState } from "react";



const EventListener = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
        <h1>eventlisener</h1>
      Radio buttons
      <label> Option 1</label>
      <input
        type="radio"
        value="option1"
        checked={selectedOption === "option1"}
        onChange={handleOptionChange}
      />
      <label> Option 2</label>
      <input
        type="radio"
        value="option2"
        checked={selectedOption === "option2"}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default EventListener;
