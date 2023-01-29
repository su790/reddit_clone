import React, { type HTMLAttributes } from "react";

interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
  // className?: string;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function DropdownItem({
  isActive = false,
  children,
  className,
  ...rest
}: DropdownItemProps) {
  return (
    <button
      className={`flex w-full cursor-pointer items-center gap-3 py-3 pl-12 pr-2 text-start hover:bg-gray-100 dark:bg-neutral-900 dark:text-gray-200 dark:hover:bg-neutral-800  ${
        isActive ? "bg-gray-200 " : "bg-white "
      } ${className || ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default DropdownItem;
