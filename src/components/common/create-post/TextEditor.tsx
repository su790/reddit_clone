import React, { useState } from "react";
import ReactQuill, { type QuillOptions } from "react-quill";
import "react-quill/dist/quill.snow.css";

//
const options: QuillOptions = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      ["code", "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }],
    ],
  },
};
function TextEditor() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <ReactQuill
      modules={options.modules}
      placeholder="Your Description"
      theme="snow"
      value={value}
      className="h-[70%] border-none font-heading outline-none focus:border-neutral-900"
      onChange={setValue}
    />
  );
}

export default TextEditor;
