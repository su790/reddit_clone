import { useState } from "react";
import { Tab } from "@headlessui/react";

export default function MainPostBox() {
  return (
    <div className="">
      <Tab.Group>
        <Tab.List className="">
          <Tab>Post</Tab>
          <Tab>Image and video</Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>Post text here</Tab.Panel>
          <Tab.Panel>Post image and video here</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
