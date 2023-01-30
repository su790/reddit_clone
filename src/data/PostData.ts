import { PostDatas, type PostData } from "../types/postData.types";

export const postDatas: PostDatas = [
  {
    postCommunity: "r/MicrosoftRewards",
    postedBy: {
      avatar:
        "https://images.pexels.com/users/avatars/1245209/polina-348.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2",
      display_name: "Bikrant jung",
      username: "Jung_Bikrant",
      userId: "userId1",
    },
    created_at: "2023-01-28T11:26:51.682Z",
    downVotes: ["bikrant", "sushant"],
    upVotes: ["hari", "ramu", "shyamu", "manu", "tamu"],
    postId: "id1",
    postTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
    postImage:
      "https://images.pexels.com/photos/11006505/pexels-photo-11006505.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    comments: 34,
  },
  {
    postCommunity: "r/Programming",
    postedBy: {
      avatar:
        "https://images.pexels.com/users/avatars/375863/chloe-kala-714.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2",
      display_name: "Chlor",
      username: "u/Chloe",
      userId: "userId2",
    },
    created_at: "2023-01-30T11:26:51.682Z",
    downVotes: ["sushant"],
    upVotes: ["hari", "bikrant", "manu", "tamu"],
    postId: "id2",
    postTitle: "Check out my new laptop.. How is it?",
    postImage:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    comments: 21,
  },
  {
    postCommunity: "r/Memes",
    postedBy: {
      avatar:
        "https://images.pexels.com/users/avatars/3716105/cup-of-couple-765.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=2",
      display_name: "Bikrant jung",
      username: "Cup_of_Couple",
      userId: "userId1",
    },
    created_at: "2023-01-30T05:59:51.682Z",
    downVotes: ["sushant"],
    upVotes: ["hari", "ramu", "shyamu", "manu", "tamu"],
    postId: "id3",
    postTitle: "This seems hilarious",
    postImage:
      "https://images.pexels.com/photos/6633058/pexels-photo-6633058.jpeg?auto=compress&cs=tinysrgb&w=600",
    comments: 112,
  },
];
