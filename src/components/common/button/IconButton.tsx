import { IconBell } from "@tabler/icons";
import Link from "next/link";
import React from "react";
interface IconButtonProps {
  title: string;
  children: React.ReactNode;
  href?: string;
}
function IconButton({ children, title, href }: IconButtonProps) {
  if (href)
    return (
      <Link href={href}>
        <div
          className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          title={title}
        >
          {children}
        </div>
      </Link>
    );
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
