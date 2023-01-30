import Link from "next/link";
import React from "react";
import UserAvatar from "../icons/UserAvatar";
import { formatDistance } from "date-fns";
interface CardHeaderProps {
  avatar: string;
  username: string;
  postCommunity: string;
  created_at: string;
  postTitle: string;
}
function CardHeader({
  avatar,
  created_at,
  postCommunity,
  postTitle,
  username,
}: CardHeaderProps) {
  return (
    <div className="flex flex-col gap-1 p-2">
      <div className="flex items-center gap-1">
        <UserAvatar src={avatar} />
        <Link href={postCommunity}>
          <h3 className="heading-text font-semibold hover:underline">
            {postCommunity}
          </h3>
        </Link>
        <span className="h-[3px] w-[3px] rounded-full  bg-neutral-400"></span>
        <p className="text-[10px] text-gray-600">
          Posted by{" "}
          <Link href={username}>
            {" "}
            <span className="hover:underline">{username}</span>{" "}
          </Link>
          <span>
            {formatDistance(new Date(created_at), new Date(), {
              addSuffix: true,
            })}
          </span>
        </p>
      </div>
      <Link href="/">
        <h2 className="text-lg font-medium line-clamp-2 hover:underline">
          {postTitle}
        </h2>
      </Link>
    </div>
  );
}

export default CardHeader;
