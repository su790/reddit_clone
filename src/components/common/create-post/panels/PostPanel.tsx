import React, { useState } from "react";
import PostTitle from "../PostTitle";
import TabLayout from "../tabs/TabLayout";
import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("../TextEditor"), { ssr: false });
function PostPanel() {
  const [title, setTitle] = useState("");
  return (
    <div className="flex flex-col gap-3">
      <PostTitle title={title} setTitle={setTitle} />
      <div className=" border  focus-within:border-neutral-900">
        <TextEditor />
      </div>
    </div>
  );
}

export default PostPanel;
