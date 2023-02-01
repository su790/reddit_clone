import Head from "next/head";
import Card from "../components/common/card/Card";
import MiniCreatePostBox from "../components/common/create-post/MiniCreatePostBox";
import HomePageNav from "../components/common/navbar/HomePageNav";
import GridLayout from "../components/layouts/GridLayout";
import { postDatas } from "../data/PostData";

function HomePage() {
  return (
    <>
      <Head>
        <title>Reddit - Dive into anything</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
}

export default HomePage;
