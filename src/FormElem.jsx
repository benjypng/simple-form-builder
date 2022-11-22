import React from "react";

export default function FormElem(props) {
  console.log(props);

  function constructElem(formType) {
    if (formType === "text") {
      return <input type="text" className="py-0.5 px-3 rounded-lg w-96" />;
    } else if ((formType = "dropdown")) {
      return (
        <select className="w-48 py-1 px-3 rounded-md text-sm">
          <option>hello</option>
        </select>
      );
    } else if ((formType = "multi")) {
      return (
        <select className="w-48 py-1 px-3 rounded-md text-sm" multiple>
          <option>hello</option>
        </select>
      );
    }
  }

  return (
    <div className="mb-3">
      <div className="mb-1 ml-1">{props.question}</div>
      <div>{constructElem(props.formType)}</div>
    </div>
  );
}
