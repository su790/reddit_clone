import {
  IconFlame,
  IconArrowMergeLeft,
  IconRocket,
  IconSparkles,
} from "@tabler/icons-react";
import clsx from "clsx";
import React from "react";

function HomePageNav() {
  return (
    <div className="apply-bg apply-border flex items-center gap-1 p-3">
      <HomePageNavIcons title="Best" active>
        <IconRocket className="icon stroke-[2px] text-inherit" />
      </HomePageNavIcons>

      <HomePageNavIcons title="Hot">
        <IconFlame className="icon stroke-[2px] text-inherit" />
      </HomePageNavIcons>
      <HomePageNavIcons title="New">
        <IconSparkles className="icon stroke-[2px] text-inherit" />
      </HomePageNavIcons>
      <HomePageNavIcons title="Top">
        <IconArrowMergeLeft className="icon stroke-[2px] text-inherit" />
      </HomePageNavIcons>
    </div>
  );
}

function HomePageNavIcons({
  children,
  title,
  active = false,
}: {
  children: React.ReactNode;
  title: string;
  active?: boolean;
}) {
  return (
    <button
      className={clsx(
        "flex items-center gap-1 rounded-full px-2 py-1 text-gray-500 hover:bg-neutral-200/70",
        {
          "bg-neutral-100 text-secondary-800": active,
        }
      )}
    >
      {children}

      <span className="heading-text text-sm font-semibold text-inherit">
        {title}
      </span>
    </button>
  );
}

export default HomePageNav;
