import { Box } from "@mui/material";
import type { PostMeta } from "@/Type";
import type { GetStaticProps } from "next";
import Template from "@/component/template/homepage";
// import SEO from "components/common/seo";
import getPost from "@/service/Project/accessToTopPro";

type Props = {
  posts: PostMeta[];
  totalPage: number;
};

/** ページ本体 */
const Page = ({ posts, totalPage }: Props) => {
  return (
    <Box>
      {/* <SEO /> */}
      <Template posts={posts} total={totalPage} current={1} /*mode={"page"} */ />
    </Box>
  );
};

/** ビルド時のみの静的ページ生成 */
export const getStaticProps: GetStaticProps = () => {
  return {
    props: getPost()
  };
};

export default Page;
