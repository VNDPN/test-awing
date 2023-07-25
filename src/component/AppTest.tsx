import React, { useState } from "react";

type TemplateType = "template1" | "template2";

interface Step0Data {
  name: string;
  title: string;
}

interface Step1Data {
  template: TemplateType | "";
  email: string;
  age?: number;
  gender?: string;
  id?: number;
  username?: string;
  password?: string;
}

const AppTest: React.FC = () => {
  const [step, setStep] = useState(0);
  const [step0Data, setStep0Data] = useState<Step0Data>({
    name: "",
    title: "",
  });
  const [step1Data, setStep1Data] = useState<Step1Data[]>([
    { template: "", email: "" },
  ]);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleChangeStep0 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStep0Data((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeStep1 = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setStep1Data((prevData) =>
      prevData.map((data, i) =>
        i === index ? { ...data, [name]: value } : data
      )
    );
  };

  const handleTemplateChange = (index: number, template: TemplateType) => {
    setStep1Data((prevData) =>
      prevData.map((data, i) =>
        i === index ? { ...data, template, email: "" } : data
      )
    );
  };

  const handleAddView = () => {
    if (
      step1Data.every((data) => (data.email || data.username) && data.template)
    ) {
      setStep1Data((prevData) => [...prevData, { template: "", email: "" }]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitClicked(true);
    console.log("step1Data", step1Data);
    if (step === 0 && step0Data.name && step0Data.title) {
      setStep(1);
    }
    if (
      // isSubmitClicked &&
      step0Data.name &&
      step0Data.title &&
      step1Data.every((data) => (data.email || data.username) && data.template)
    ) {
      alert("Thành công");
    } else {
      alert(
        "Vui lòng điền đủ thông tin và thực hiện validation với các trường bắt buộc nhập"
      );
    }
  };
  // useEffect(() => {

  // }, [isSubmitClicked]);

  return (
    <div className="container">
      <ul className="_tab">
        <li className={step === 0 ? "active" : ""} onClick={() => setStep(0)}>
          {" "}
          step 0
        </li>
        <li className={step === 1 ? "active" : ""} onClick={() => setStep(1)}>
          {" "}
          step 1
        </li>
      </ul>
      <h1>Step {step}</h1>
      {step === 0 && (
        <div className="step">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={step0Data.name}
            onChange={handleChangeStep0}
          />
          {isSubmitClicked && !step0Data.name && (
            <span style={{ color: "red" }}>Name is required</span>
          )}
          <br />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={step0Data.title}
            onChange={handleChangeStep0}
          />
          {isSubmitClicked && !step0Data.title && (
            <span style={{ color: "red" }}>Title is required</span>
          )}
        </div>
      )}
      {step === 1 && (
        <div className="step">
          {step1Data.map((data, index) => (
            <div key={index} className="_border">
              <select
                name="template"
                value={data.template}
                onChange={(e) =>
                  handleTemplateChange(index, e.target.value as TemplateType)
                }
              >
                <option value="">Select a template</option>
                <option value="template1">Template 1</option>
                <option value="template2">Template 2</option>
              </select>
              {isSubmitClicked ||
                (!data.template && (
                  <span
                    style={{ color: "red", width: "100%", display: "block" }}
                  >
                    Template is required
                  </span>
                ))}
              <br />
              {data.template === "template1" && (
                <div className="_form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => handleChangeStep1(index, e)}
                  />
                  {isSubmitClicked && !data.email && (
                    <span style={{ color: "red" }}>Email is required</span>
                  )}
                  <br />
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={data.age || ""}
                    onChange={(e) => handleChangeStep1(index, e)}
                  />
                  <br />
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={data.gender || ""}
                    onChange={(e) => handleChangeStep1(index, e)}
                  />
                  <br />
                </div>
              )}
              {data.template === "template2" && (
                <div className="_form">
                  <input
                    type="number"
                    name="id"
                    placeholder="ID"
                    value={data.id || ""}
                    onChange={(e) => handleChangeStep1(index, e)}
                  />
                  {isSubmitClicked && !data.id && (
                    <span style={{ color: "red" }}>ID is required</span>
                  )}
                  <br />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={data.username || ""}
                    onChange={(e) => handleChangeStep1(index, e)}
                  />
                  {isSubmitClicked && !data.username && (
                    <span style={{ color: "red" }}>Username is required</span>
                  )}
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password || ""}
                    onChange={(e) => handleChangeStep1(index, e)}
                  />
                  <br />
                </div>
              )}
            </div>
          ))}

          {step1Data.every(
            (data) => (data.email || data.username) && data.template
          ) && <button onClick={handleAddView}>+</button>}
        </div>
      )}
      <button onClick={handleSubmit} className="_button">
        Submit
      </button>
      {isSubmitClicked &&
        step0Data.name &&
        step0Data.title &&
        step1Data.every(
          (data) => (data.email || data.username) && data.template
        ) && <div style={{ color: "green" }}>Success</div>}
      {isSubmitClicked &&
        (!step0Data.name ||
          !step0Data.title ||
          !step1Data.every(
            (data) => (data.email || data.username) && data.template
          )) && (
          <div style={{ color: "red" }}>
            Please fill in all required information and perform validation on
            required fields
          </div>
        )}
    </div>
  );
};

export default AppTest;
