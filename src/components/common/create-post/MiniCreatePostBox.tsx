import { IconLink, IconPhoto } from "@tabler/icons-react";
import React from "react";
import IconButton from "../button/IconButton";
import DefaultAvatar from "../navbar/DefaultAvatar";

function MiniCreatePostBox() {
  return (
    <div className="apply-bg apply-border flex items-center gap-2 p-2">
      <DefaultAvatar isOnline rounded="full" style={{ height: "32px" }} />
      <input placeholder="Create Post" className="input flex-1" />
      <IconButton title="Photo icon">
        <IconPhoto className="icon h-6 w-6" />
      </IconButton>
      <IconButton title="Link icon">
        <IconLink className="icon h-6 w-6" />
      </IconButton>
    </div>
  );
}

export default MiniCreatePostBox;
