import { IconPhoto } from "@tabler/icons-react";
import React from "react";
import TabLayout from "./TabLayout";

function ImageVideoTab({
  selectedIndex,
  currentIndex,
}: {
  selectedIndex: number;
  currentIndex: number;
}) {
  return (
    <TabLayout
      text="Images & Video"
      selectedIndex={selectedIndex}
      currentIndex={currentIndex}
    >
      <IconPhoto className="create-post-icon" />
    </TabLayout>
  );
}

export default ImageVideoTab;
