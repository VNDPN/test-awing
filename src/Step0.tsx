import React, { useState } from "react";

interface Step0Props {
  onNextStep: () => void;
}

const Step0: React.FC<Step0Props> = ({ onNextStep }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <h2>Step 0</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <button onClick={onNextStep}>Next</button>
    </div>
  );
};

export default Step0;
