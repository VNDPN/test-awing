import React, { useState } from "react";

interface Step1Props {
  onAddView: () => void;
  isValid: boolean;
}

enum TemplateType {
  None,
  Template1,
  Template2,
}

const Step1: React.FC<Step1Props> = ({ onAddView, isValid }) => {
  const [template, setTemplate] = useState<TemplateType>(TemplateType.None);
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTemplate(Number(e.target.value) as TemplateType);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isValidView = () => {
    if (template === TemplateType.Template1) {
      return email.trim() !== "";
    } else if (template === TemplateType.Template2) {
      return id.trim() !== "" && username.trim() !== "";
    } else {
      return true;
    }
  };

  return (
    <div>
      <h2>Step 1</h2>
      <div>
        <label>Template:</label>
        <select value={template} onChange={handleTemplateChange}>
          <option value={TemplateType.None}>None</option>
          <option value={TemplateType.Template1}>Template 1</option>
          <option value={TemplateType.Template2}>Template 2</option>
        </select>
      </div>
      {template !== TemplateType.None && (
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required={template === TemplateType.Template1}
          />
        </div>
      )}
      {template === TemplateType.Template1 && (
        <>
          <label>Age:</label>
          <input type="text" value={age} onChange={handleAgeChange} />
          <label>Gender:</label>
          <input type="text" value={gender} onChange={handleGenderChange} />
        </>
      )}
      {template === TemplateType.Template2 && (
        <>
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={handleIdChange}
            required={template === TemplateType.Template2}
          />
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required={template === TemplateType.Template2}
          />
          <label>Password:</label>
          <input type="text" value={password} onChange={handlePasswordChange} />
        </>
      )}
      {isValid && !isValidView() && (
        <div style={{ color: "red" }}>Please fill in required fields.</div>
      )}
      <button onClick={onAddView} disabled={!isValidView()}>
        +
      </button>
    </div>
  );
};

export default Step1;
