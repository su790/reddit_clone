import Image from "next/image";
import React from "react";
import UserAvatar from "../icons/UserAvatar";

const Profile = ({
  Avatar,
  Background,
}: {
  Avatar: string;
  Background: string;
}) => {
  return (
    <div className="absolute inset-x-0">
      <span className=" block h-[64px] min-w-[260px] overflow-hidden bg-[#0079d3]">
        <Image
          src={Background}
          object-fit="contain"
          alt="cover Img"
          width="10000"
          height={100000}
        />
      </span>
      <div>
        <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full">
          <Image src={Avatar} alt="Profile Picture" width={72} height={72} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
