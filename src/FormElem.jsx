import React from "react";

export default function FormElem(props) {
  function constructElem(formType) {
    if (formType === "text") {
      return <input type="text" className="py-0.5 px-3 rounded-lg w-96" />;
    } else if (formType === "dropdown") {
      return (
        <select className="w-48 py-1 px-3 rounded-md text-sm">
          {props.dropdownOptions.split(",").map((o) => (
            <option>{o}</option>
          ))}
        </select>
      );
    } else if (formType === "multi") {
      return (
        <select className="w-48 py-1 px-3 rounded-md text-sm" size="3" multiple>
          {props.dropdownOptions.split(",").map((o) => (
            <option>{o}</option>
          ))}
        </select>
      );
    }
  }

  return (
    <div className="mb-3" id={props.key}>
      <div className="mb-1 ml-1">{props.question}</div>
      <div>{constructElem(props.formType)}</div>
    </div>
  );
}
