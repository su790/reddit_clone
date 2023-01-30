import {
  IconBookmark,
  IconDots,
  IconMessage2,
  IconShare,
} from "@tabler/icons-react";
import React from "react";
import BigIconButtons from "../button/BigIconButtons";
import IconButton from "../button/IconButton";
interface CardFooterProps {
  comments: number;
}
function CardFooter({ comments }: CardFooterProps) {
  return (
    <div className="flex gap-1 p-2">
      <BigIconButtons title={`${comments} Comments`}>
        <IconMessage2 className="icon h-4 w-4" />
      </BigIconButtons>
      <BigIconButtons title={`Share`}>
        <IconShare className="icon h-4 w-4" />
      </BigIconButtons>
      <BigIconButtons title={`Save`}>
        <IconBookmark className="icon h-4 w-4" />
      </BigIconButtons>
      <IconButton title={`Save`}>
        <IconDots className="icon h-4 w-4" />
      </IconButton>
    </div>
  );
}

export default CardFooter;
