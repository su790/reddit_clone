import clsx from "clsx";
import React, { type HTMLAttributes } from "react";
interface BigIconButtonsProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
  title: string;
  rounded?: "full" | "md";
}
function BigIconButtons({
  active = false,
  children,
  title,
  rounded = "md",
}: BigIconButtonsProps) {
  return (
    <button
      className={clsx(
        "flex items-center gap-1  px-2 py-1 text-gray-500 hover:bg-neutral-200/70",
        {
          "bg-neutral-100 text-secondary-800": active,
          "rounded-full": rounded === "full",
          "rounded-md": rounded === "md",
        }
      )}
    >
      {children}

      <span className="heading-text text-xs font-semibold text-inherit">
        {title}
      </span>
    </button>
  );
}

export default BigIconButtons;
