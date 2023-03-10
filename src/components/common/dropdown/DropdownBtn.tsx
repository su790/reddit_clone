import React from "react";
interface DropdownBtnProps {
  children: React.ReactNode;
  className?: string;
}

function DropdownBtn({ children, className }: DropdownBtnProps) {
  return (
    <div
      className={`flex items-center rounded border border-white py-1 px-2 hover:border-gray-200 active:border-gray-200 dark:border-neutral-900  dark:hover:border-neutral-800 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export default DropdownBtn;
