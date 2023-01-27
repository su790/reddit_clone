import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function TextEditor() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <ReactQuill
      placeholder="Your Description"
      theme="snow"
      value={value}
      className="border-none outline-none"
      onChange={setValue}
    />
  );
}

export default TextEditor;
