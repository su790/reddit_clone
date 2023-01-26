import { IconBell } from "@tabler/icons";
import React from "react";
interface IconButtonProps {
  title: string;
  children: React.ReactNode;
}
function IconButton({ children, title }: IconButtonProps) {
  return (
    <button
      type="button"
      className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
      title={title}
    >
      {children}
    </button>
  );
}

export default IconButton;
