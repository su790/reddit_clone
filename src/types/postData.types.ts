export interface PostUser {
  username: string;
  userId: string;
  avatar: string;
  display_name: string;
}

export interface PostData {
  postId: string;
  postCommunity: string;
  postedBy: string;
  created_at: string;
  postTitle: string;
  postImage: string;
  upVotes: string[]; // arrays of userId who have upvoted
  downVotes: string[]; // arrays of userId who have downvoted
}
