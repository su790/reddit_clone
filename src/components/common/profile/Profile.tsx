import Image from "next/image";
import React from "react";
import { IconBellFilled } from "@tabler/icons-react";
import GridLayout from "../../layouts/GridLayout";
import MiniCreatePostBox from "../create-post/MiniCreatePostBox";
import { postDatas } from "@/src/data/PostData";
import Card from "../card/Card";
import HomePageNav from "../navbar/HomePageNav";
const Profile = ({
  Avatar,
  Background,
}: {
  Avatar: string;
  Background: string;
}) => {
  return (
    <>
      <div className="absolute inset-x-0 -mb-0">
        <span className=" block h-[74px] min-w-[260px] overflow-hidden bg-[#0079d3] lg:h-[64px]  ">
          <Image
            src={Background}
            object-fit="contain"
            alt="cover Img"
            width="10000"
            height={100000}
          />
        </span>
        <div className="flex flex-col items-center bg-white px-4 sm:px-8 md:px-24   lg:mx-auto lg:flex-row lg:items-start lg:px-28 xl:px-36">
          <div className="relative mb-2 -mt-[40px] flex h-[80px] w-[80px] overflow-hidden rounded-full border-2 border-white lg:-mt-3 lg:h-[72px] lg:w-[72px] lg:border-4 ">
            <Image src={Avatar} alt="Profile Picture" fill object-fit="cover" />
          </div>
          <div className=" col-span-3 flex flex-col items-center pb-2 pl-4 lg:mt-3 lg:mb-2 lg:flex-row ">
            <div className="flex flex-col items-center lg:items-start lg:pr-8 ">
              <h2 className="text-2xl font-bold leading-6">Hancyketotemee</h2>
              <h4 className="py-2 text-xs text-slate-400">r/Hancyketoteme</h4>
            </div>
            <div>
              <form action="" method="post">
                <div className="flex lg:-mt-3">
                  <button
                    type="submit"
                    className="text-md rounded-3xl border-[1px] border-sky-700 py-1 px-8 font-bold text-sky-700"
                  >
                    Joined
                  </button>
                  <button
                    type="submit"
                    className="hidden h-10 w-10 items-center justify-center rounded-full border-[1px] border-sky-700 text-sky-700 lg:ml-2 lg:flex "
                  >
                    <IconBellFilled />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[212px] lg:h-[140px]"></div>
      <GridLayout>
        <div className="col-span-3 flex max-w-6xl flex-col gap-3 py-8 lg:col-span-2">
          <MiniCreatePostBox />
          <HomePageNav />
          {postDatas.map((item) => {
            return <Card key={item.postId} {...item} />;
          })}
        </div>
        <div className="hidden h-full lg:block">ramu</div>
      </GridLayout>
    </>
  );
};

export default Profile;
