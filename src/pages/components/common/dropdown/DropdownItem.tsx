import React from "react";

interface DropdownItemProps {
  isActive?: boolean;
  children: React.ReactNode;
}

function DropdownItem({ isActive = false, children }: DropdownItemProps) {
  return (
    <div
      // type="button"
      className={`flex w-full items-center gap-3 py-3 pl-12 pr-2 text-start hover:bg-gray-100  ${
        isActive ? "bg-gray-200 " : "bg-white "
      }`}
    >
      {children}
    </div>
  );
}

export default DropdownItem;
