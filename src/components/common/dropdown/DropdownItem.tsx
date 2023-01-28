import React from "react";

interface DropdownItemProps {
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function DropdownItem({
  isActive = false,
  children,
  className,
  onClick,
}: DropdownItemProps) {
  return (
    <div
      onClick={onClick}
      // type="button"
      className={`flex w-full cursor-pointer items-center gap-3 py-3 pl-12 pr-2 text-start hover:bg-gray-100  ${
        isActive ? "bg-gray-200 " : "bg-white "
      } ${className || ""}`}
    >
      {children}
    </div>
  );
}

export default DropdownItem;
