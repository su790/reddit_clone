import {
  IconArrowBigDown,
  IconArrowBigDownFilled,
  IconArrowBigUp,
  IconArrowBigUpFilled,
} from "@tabler/icons-react";
import clsx from "clsx";
import React from "react";

interface VoteButtonProps {
  voted: "up" | "down" | null;
}

function VoteButton({ voted }: VoteButtonProps) {
  return (
    <div
      className={clsx("flex flex-col items-center gap-1 bg-neutral-100 p-2", {
        "text-primary-800 hover:text-primary-800": voted === "up",
        "text-secondary-800": voted === "down",
      })}
    >
      <button
        className={clsx("rounded p-1 text-inherit hover:bg-neutral-200", {})}
      >
        {voted === "up" ? (
          <IconArrowBigUpFilled className="icon text-inherit " />
        ) : (
          <IconArrowBigUp className="icon hover:text-primary-800" />
        )}
      </button>
      <span className="heading-text font-bold text-inherit">5</span>
      <button
        className={clsx("rounded p-1 hover:bg-neutral-200", {
          "": !voted,
        })}
      >
        {voted === "down" ? (
          <IconArrowBigDownFilled className="icon text-inherit" />
        ) : (
          <IconArrowBigDown className="icon  hover:text-secondary-800" />
        )}
      </button>
    </div>
  );
}

export default VoteButton;
