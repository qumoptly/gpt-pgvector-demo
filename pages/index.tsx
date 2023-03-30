// pages/index.tsx

import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen antialiased text-center text-slate-50">
      <div className="flex flex-col items-center px-6 m-auto mx-auto max-w-7xl">
        <h1 className="max-w-lg text-2xl font-extrabold">
          特定领域的ChatGPT-demo
        </h1>
        <ul className="mt-10 mb-6 text-md sm:text-lg text-slate-400">
          <li><Link href="/docs" >➣尝试搜索</Link></li>
          <li><Link href="https://astro-labs.app/docs" >☞地址：gpt3.5-turbo-pgvector</Link></li>
          <li><Link href="./" >➢Create Embeddings</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default HomePage;
