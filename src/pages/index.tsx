import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/common/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="apply-bg apply-border w-18 m-3 h-12"></div>
    </>
  );
};

export default Home;
