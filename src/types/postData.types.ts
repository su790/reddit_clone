export interface PostUser {
  username: string;
  userId: string;
  avatar: string;
  display_name: string;
}
export interface PostCommunity {
  // Define interface for Community Data
  data: string;
}

export interface PostData {
  postId: string;

  // Relation to community
  postCommunity: string;

  // Relation to user
  postedBy: PostUser;
  created_at: string;
  postTitle: string;
  /*
  Post maybe of type image, link, text, or video so these properties are optional
  We have to render the post card conditionally
  Add this data to database
  */
  postImage?: string[];
  postText?: string;
  postVideo?: string;
  postLink?: string;
  upVotes: string[]; // arrays of userId who have upvoted
  downVotes: string[]; // arrays of userId who have downvoted
  comments: number;
  postType: "image" | "link" | "video" | "text";
}
type Partial<T> = { [P in keyof T]?: T[P] | undefined };
export type PartialPostData = Partial<PostData>;

export type PostDatas = PostData[];
