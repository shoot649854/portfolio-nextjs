import { Typography } from "@mui/material"
import type { PostMeta } from "@/Type";
import type {  GetStaticProps } from "next";
import getPost from "@/service/Project/accessToTopPro";
import { Box } from "@mui/system";
import Template from "@/component/template/gallery";

type Props = {
    posts: PostMeta[];
    totalPage: number;
};


const post = ({ posts, totalPage }: Props) => {
    return (
        <Template totalPage={totalPage} posts={posts}/>
    );
};

  /** ビルド時のみの静的ページ生成 */
  export const getStaticProps: GetStaticProps = () => {
    return {
      props: getPost(),
    };
  };
export default post;
