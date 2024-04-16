import React from "react";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import type { GetStaticProps, GetStaticPaths } from "next";
import { getAllPaths, getPosts } from "@/service/Blog/accessToPage";

const Page = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div>
      <Typography variant="h1">Hello {page}</Typography>
    </div>
  );
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = () => {
  const pages = getAllPaths();

  return {
    paths: pages.map((p) => ({
      params: { page: p.toString() }
    })),
    fallback: false
  };
};

/** ビルド時の静的生成 */
export const getStaticProps: GetStaticProps = ({ params }) => {
  const page = Number(params?.page as string);
  const posts = getPosts(page);

  return {
    props: {
      posts: posts.posts,
      totalPage: posts.totalPage,
      current: page
    }
  };
};

export default Page;
