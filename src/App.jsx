import React, { useState } from "react";
import FormElem from "./FormElem";
import "./tailwind.css";

export default function App() {
  const [questions, setFormQuestions] = useState([]);
  const [qnTemplate, setQnTemplate] = useState({
    question: "",
    formType: "",
    dropdownOptions: "",
  });
  const [selectDropdown, setSelectDropdown] = useState(false);

  function handleForm(e) {
    if (e.target.value === "dropdown" || e.target.value === "multi") {
      setSelectDropdown(true);
    }
    setQnTemplate({
      ...qnTemplate,
      [e.target.name]: e.target.value,
    });
  }

  function clearForm() {
    setSelectDropdown(false);
    setQnTemplate({ question: "", formType: "" });
    setFormQuestions([]);
  }

  function addToForm() {
    if (
      qnTemplate.question === "" ||
      qnTemplate.formType === "" ||
      (selectDropdown && qnTemplate.dropdownOptions === "")
    ) {
      alert("Fields are mandatory");
    } else {
      setFormQuestions([...questions, qnTemplate]);
      setSelectDropdown(false);
      setQnTemplate({ question: " ", formType: " " });
    }
  }

  return (
    <div className="flex justify-center">
      <div className="absolute top-10 bg-white rounded-lg p-3 w-1/2 border text-sm border-black">
        {/* Start content here */}
        <h1 className="mb-3 text-black text-lg">Simple Form Builder</h1>
        <p className="text-red-700 mb-3">Start by adding a question below!</p>

        <div className="flex w-full items-center mb-2">
          <div className="w-full">
            <input
              type="text"
              className="py-1 px-3 rounded-lg w-96"
              placeholder="Question"
              name="question"
              onChange={handleForm}
              value={qnTemplate.question}
            />
          </div>
          <div>
            <select
              name="formType"
              className="w-48 py-1 px-3 rounded-md"
              onChange={handleForm}
              value={qnTemplate.formType}
            >
              <option>Choose a form type</option>
              <option value="text">text</option>
              <option value="dropdown">dropdown</option>
              <option value="multi">multi-select</option>
            </select>
          </div>
          <div>
            <button
              className="rounded-full ml-3 p-2 border text-white bg-blue-800"
              onClick={addToForm}
            >
              add
            </button>
          </div>
        </div>

        {selectDropdown && (
          <div className="w-full">
            <input
              type="text"
              className="py-0.5 px-3 rounded-lg w-96 text-sm"
              placeholder="Dropdown options separated by a comma."
              name="dropdownOptions"
              onChange={handleForm}
              value={qnTemplate.dropdownOptions}
            />
          </div>
        )}

        <div>
          {questions.length > 0 && (
            <p className="text-xl mt-8 mb-2">Preview Form</p>
          )}
          {questions.map((q, index) => (
            <FormElem
              key={index}
              question={q.question}
              formType={q.formType}
              dropdownOptions={q.dropdownOptions}
            />
          ))}
        </div>

        {questions.length > 0 && (
          <div className="text-right">
            <button className="bg-green-800 text-white w-18 rounded-full px-2 py-1 mr-2">
              Save Form
            </button>
            <button
              className="bg-gray-800 text-white w-14 rounded-full px-2 py-1"
              onClick={clearForm}
            >
              Clear
            </button>
          </div>
        )}
        {/* End content here */}
      </div>
    </div>
  );
}
