import clsx from "clsx";
import React from "react";
import { text } from "stream/consumers";

interface TabLayoutProps {
  children: React.ReactNode;
  selectedIndex: number;
  currentIndex: number;
  text: string;
}

function TabLayout({
  children,
  selectedIndex,
  currentIndex,
  text,
}: TabLayoutProps) {
  return (
    <div
      className={clsx([
        "heading-text relative flex items-center gap-1 border-r px-6 py-2 text-base text-gray-400 hover:bg-secondary-50/60  dark:border-r-neutral-600 dark:hover:bg-neutral-800",
        {
          "text-secondary-600 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-secondary-600 dark:text-gray-100 dark:after:bg-gray-100":
            selectedIndex === currentIndex,
        },
      ])}
    >
      {children}
      <p className="text-sm font-semibold ">{text}</p>
    </div>
  );
}

export default TabLayout;
