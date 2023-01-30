import Link from "next/link";
import React from "react";
interface IconButtonProps {
  title: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}
function IconButton({
  children,
  title,
  href,
  className,
  onClick,
}: IconButtonProps) {
  if (href)
    return (
      <Link href={href}>
        <div
          onClick={onClick}
          className={`p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 ${
            className || ""
          }`}
          title={title}
        >
          {children}
        </div>
      </Link>
    );
  return (
    <button
      onClick={onClick}
      type="button"
      className={`p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 ${
        className || ""
      }`}
      title={title}
    >
      {children}
    </button>
  );
}

export default IconButton;
