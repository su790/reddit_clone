import React, { useState } from "react";
import PostTitle from "../PostTitle";
import TabLayout from "../tabs/TabLayout";

function PostPanel() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <PostTitle title={title} setTitle={setTitle} />
    </div>
  );
}

export default PostPanel;
