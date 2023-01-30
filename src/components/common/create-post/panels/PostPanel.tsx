import React, { useState } from "react";
import PostTitle from "../PostTitle";

import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("../TextEditor"), { ssr: false });
function PostPanel() {
  const [title, setTitle] = useState("");
  return (
    <div className="flex h-full flex-1 flex-col gap-3 pb-4 ">
      <PostTitle title={title} setTitle={setTitle} />
      <div className="h-full flex-1">
        <TextEditor />
      </div>
    </div>
  );
}

export default PostPanel;
