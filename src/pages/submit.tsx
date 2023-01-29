import { GetServerSideProps } from "next";
import React from "react";
import { text } from "stream/consumers";
import MainPostBox from "../components/common/create-post/MainPostBox";
import SearchBox from "../components/common/form/SearchBox";
import RedditHappyIcon from "../components/common/icons/RedditHappyIcon";
import { postingTips } from "../data/PostingTips";
import { getServerAuthSession } from "../server/auth";
import { useUserStore } from "../stores/useUserStore";

function SubmitPage() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-white pb-3 dark:border-neutral-600 ">
            <h2 className="heading-text text-lg">Create a post</h2>
            <button type="button" className="heading-text">
              DRAFTS
            </button>
          </div>

          <div className="w-72">
            <SearchBox
              placeholder="Search for community"
              placement="create-post"
            />
          </div>
          <MainPostBox />
        </div>
      </div>
      <div className="h-full">
        <div className="apply-bg apply-border mt-12 flex flex-col p-3 px-5">
          <div className="flex items-center gap-2 border-b pb-2">
            <RedditHappyIcon height="32" />
            <h2 className="heading-text text-base">Posting to Reddit</h2>
          </div>
          {postingTips.map((item, index) => {
            return (
              <PostingTip key={item.id}>
                {index + 1}. {item.text}
              </PostingTip>
            );
          })}
        </div>
        <p className="heading-text mt-4 w-3/4 font-semibold text-gray-600 dark:text-gray-400 ">
          Please be mindful of reddit&apos;s{" "}
          <span className="link">content policy</span> and practice good{" "}
          <span className="link">reddiquette</span>.
        </p>
      </div>
    </div>
  );
}

function PostingTip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-b py-2">
      <h2 className="heading-text text-sm">{children}</h2>
    </div>
  );
}

export default SubmitPage;
