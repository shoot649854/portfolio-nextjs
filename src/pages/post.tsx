import type { PostMeta } from "@/Type";
import type { GetStaticProps } from "next";
import Template from "@/component/template/gallery";
import getPost from "@/service/Blog/accessToTop";

type Props = {
  posts: PostMeta[];
  totalPage: number;
};

const post = ({ posts }: Props) => {
  return <Template posts={posts} />;
};

/** ビルド時のみの静的ページ生成 */
export const getStaticProps: GetStaticProps = () => {
  return {
    props: getPost()
  };
};
export default post;
