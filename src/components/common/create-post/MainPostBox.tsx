import { useState } from "react";
import { Tab } from "@headlessui/react";
import PostTab from "./tabs/PostTab";
import PostPanel from "./panels/PostPanel";
import ImageVideoTab from "./tabs/ImageVideoTab";
import LinkTab from "./tabs/LinkTab";

export default function MainPostBox() {
  return (
    <div className="apply-border apply-bg rounded-lg">
      <Tab.Group>
        <Tab.List className="flex border-b dark:border-neutral-600">
          {({ selectedIndex }) => {
            return (
              <>
                <Tab className="focus-visible:bg-secondary-50/50 focus-visible:outline-none">
                  <PostTab selectedIndex={selectedIndex} currentIndex={0} />
                </Tab>
                <Tab className="focus-visible:bg-secondary-50/50 focus-visible:outline-none">
                  <ImageVideoTab
                    selectedIndex={selectedIndex}
                    currentIndex={1}
                  />
                </Tab>
                <Tab className="focus-visible:bg-secondary-50/50 focus-visible:outline-none">
                  <LinkTab selectedIndex={selectedIndex} currentIndex={2} />
                </Tab>
              </>
            );
          }}
        </Tab.List>
        <Tab.Panels className="mt-2 h-full px-4 py-2">
          <Tab.Panel className={"flex h-full"}>
            <PostPanel />
          </Tab.Panel>
          <Tab.Panel>Post image and video here</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
