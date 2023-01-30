import Image from "next/legacy/image";
import React from "react";

function UserAvatar({ src }: { src: string }) {
  return (
    <div className="relative h-6 w-6 overflow-hidden rounded-full">
      <Image objectFit="cover" layout="fill" src={src} alt="Profile Picture" />
    </div>
  );
}

export default UserAvatar;
