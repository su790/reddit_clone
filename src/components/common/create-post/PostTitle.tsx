import React from "react";
import TextareaAutosize from "react-textarea-autosize";

interface PostTitleProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

function PostTitle({ title, setTitle }: PostTitleProps) {
  return (
    <div className="input relative p-1 focus-within:border-neutral-900">
      <TextareaAutosize
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
        maxLength={300}
        className="m-0 w-[90%] border-none bg-transparent text-sm focus:ring-0"
      />

      <p className="heading-text absolute top-1/2 right-3 -translate-y-1/2 font-bold text-gray-400">
        {`${!title.length ? "0" : title.length}/300`}
      </p>
    </div>
  );
}

export default PostTitle;
