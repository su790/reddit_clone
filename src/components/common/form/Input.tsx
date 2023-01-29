import React, { HTMLAttributes } from "react";
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  data?: string;
}

function Input({ ...rest }: InputProps) {
  return <input className="input" {...rest} />;
}

export default Input;
