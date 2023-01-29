import { IconFileText } from "@tabler/icons-react";
import React from "react";
import TabLayout from "./TabLayout";

function PostTab({
  selectedIndex,
  currentIndex,
}: {
  selectedIndex: number;
  currentIndex: number;
}) {
  return (
    <TabLayout
      selectedIndex={selectedIndex}
      currentIndex={currentIndex}
      text="Post"
    >
      <IconFileText className="create-post-icon" />
    </TabLayout>
  );
}

export default PostTab;
