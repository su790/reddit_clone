import { PostData } from "@/src/types/postData.types";
import { title } from "process";
import VoteButton from "../button/VoteButton";
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
  postTitle: title,
  postedBy: { avatar, display_name, userId, username },
  upVotes,
}: CardProps) {
  return (
    <div className="apply-bg apply-border flex ">
      <VoteButton upVotes={upVotes} downVotes={downVotes} voted={"down"} />
      <div className="flex flex-col gap-1">
        <CardHeader
          avatar={avatar}
          username={username}
          postCommunity={postCommunity}
          created_at={created_at}
          postTitle={title}
        />
        <CardFooter comments={comments} />
      </div>
    </div>
  );
}

export default Card;
