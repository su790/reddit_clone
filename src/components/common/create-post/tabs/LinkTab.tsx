import { IconLink, IconPhoto } from "@tabler/icons";
import React from "react";
import TabLayout from "./TabLayout";

function LinkTab({
  selectedIndex,
  currentIndex,
}: {
  selectedIndex: number;
  currentIndex: number;
}) {
  return (
    <TabLayout
      text="Link"
      selectedIndex={selectedIndex}
      currentIndex={currentIndex}
    >
      <IconLink className="create-post-icon" />
    </TabLayout>
  );
}

export default LinkTab;
