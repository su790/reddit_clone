import {
  IconArrowBigDown,
  IconArrowBigDownFilled,
  IconArrowBigUp,
  IconArrowBigUpFilled,
} from "@tabler/icons-react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface VoteButtonProps {
  voted: "up" | "down" | null;
  upVotes: string[];
  downVotes: string[];
}

function VoteButton({ upVotes, downVotes }: VoteButtonProps) {
  const [voted, setVoted] = useState<"up" | "down" | null>(null);
  const [voteData, setVoteData] = useState({
    upVotes,
    downVotes,
  });

  const currentUser = "bikrant";
  useEffect(() => {
    if (voteData.upVotes.includes(currentUser)) {
      setVoted("up");
    } else if (voteData.downVotes.includes(currentUser)) {
      setVoted("down");
    } else {
      setVoted(null);
    }
  }, [voteData.downVotes, voteData.upVotes]);
  console.log(voted);
  console.log(voteData);
  function handleVoting(voteDirection: "up" | "down") {
    setVoteData((prev) => {
      if (!voted) {
        if (voteDirection === "down") {
          return {
            ...prev,
            downVotes: [...prev.downVotes, currentUser],
          };
        }
        if (voteDirection === "up") {
          return {
            ...prev,
            upVotes: [...prev.upVotes, currentUser],
          };
        }
      }

      if (voted === "up") {
        if (voteDirection === "up") {
          return {
            ...prev,
            upVotes: prev.upVotes.filter((e) => e !== currentUser),
          };
        }
        return {
          upVotes: prev.upVotes.filter((e) => e !== currentUser),
          downVotes: [...prev.downVotes, currentUser],
        };
      }

      if (voted === "down") {
        if (voteDirection === "down") {
          return {
            ...prev,
            downVotes: prev.downVotes.filter((e) => e !== currentUser),
          };
        }
        return {
          downVotes: prev.downVotes.filter((e) => e !== currentUser),
          upVotes: [...prev.upVotes, currentUser],
        };
      }
      return {
        ...prev,
      };
    });
  }

  return (
    <div
      className={clsx("flex flex-col items-center gap-1 bg-neutral-100 p-2", {
        "text-primary-800 hover:text-primary-800": voted === "up",
        "text-secondary-800": voted === "down",
      })}
    >
      <button
        className={clsx("rounded p-1 text-inherit hover:bg-neutral-200", {})}
        onClick={() => handleVoting("up")}
      >
        {voted === "up" ? (
          <IconArrowBigUpFilled className="icon text-inherit " />
        ) : (
          <IconArrowBigUp className="icon hover:text-primary-800" />
        )}
      </button>
      <span className="heading-text font-bold text-inherit">
        {voteData.upVotes.length - voteData.downVotes.length}
      </span>
      <button
        className={clsx("rounded p-1 hover:bg-neutral-200", {
          "": !voted,
        })}
        onClick={() => handleVoting("down")}
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
