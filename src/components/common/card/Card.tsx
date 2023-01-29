import React from "react";
import VoteButton from "../button/VoteButton";

function Card() {
  return (
    <div className="apply-bg apply-border flex ">
      <VoteButton voted={"down"} />
    </div>
  );
}

export default Card;
