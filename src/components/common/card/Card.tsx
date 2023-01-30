import React from "react";
import VoteButton from "../button/VoteButton";
import { postData } from "@/src/data/PostData";
function Card() {
  return (
    <div className="apply-bg apply-border flex ">
      <VoteButton
        upVotes={postData.upVotes}
        downVotes={postData.downVotes}
        voted={"down"}
      />
    </div>
  );
}

export default Card;
