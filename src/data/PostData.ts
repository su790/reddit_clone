import { type PostDatas } from "../types/postData.types";

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

    comments: 34,
    postText:
      "<h1>sad</h1><h3>This is amazing</h3><p>Here are some further details:</p><ul><li>Hungry</li><li>Always happy</li><li>I am professional</li><li>Little too much professional</li></ul>",
    postType: "text",
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
    postImage: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/13315198/pexels-photo-13315198.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    comments: 21,
    postType: "image",
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
    postLink: "https://www.w3schools.com/cssref/css3_pr_mask-image.php",
    postVideo:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    comments: 112,
    postType: "link",
  },
];
