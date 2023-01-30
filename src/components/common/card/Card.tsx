import { type PostData } from "@/src/types/postData.types";
import { IconExternalLink, IconLink } from "@tabler/icons-react";
import { title } from "process";
import VoteButton from "../button/VoteButton";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
interface CardProps extends PostData {
  hello?: string;
}
function Card({
  comments,
  created_at,
  downVotes,
  postCommunity,
  postId,
  postImage,
  postType,
  postText,
  postLink,
  postVideo,
  postTitle: title,
  postedBy: { avatar, display_name, userId, username },
  upVotes,
}: CardProps) {
  return (
    <div className="apply-bg apply-border flex ">
      <VoteButton upVotes={upVotes} downVotes={downVotes} voted={"down"} />
      <div className="flex w-full">
        <div className="flex w-full flex-1 flex-col gap-1">
          <CardHeader
            avatar={avatar}
            username={username}
            postCommunity={postCommunity}
            created_at={created_at}
            postTitle={title}
          />

          <CardBody
            postImage={postImage}
            postText={postText}
            postType={postType}
            postLink={postLink}
            postVideo={postVideo}
          />
          <CardFooter comments={comments} />
        </div>
        {postType === "link" && (
          <div className="relative m-2 hidden h-24 w-32 items-center justify-center overflow-hidden rounded-md border border-secondary-800 sm:flex">
            <IconLink className="h-7 w-7 stroke-[1.3px] text-secondary-800" />
            <a target={"_blank"} rel="noreferrer" href={postLink}>
              <div className="absolute bottom-0 right-0 rounded-tl-md bg-secondary-800 p-[2px]">
                <IconExternalLink className="h-5 w-5 stroke-[1.3px] text-gray-100" />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
