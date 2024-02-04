import type { PostData } from "@/Type";
// import CustomLink from "components/common/customLink";
import Header from "@/component/post/Header";
import Body from "@/component/post/Body";
import { Box } from "@mui/material";
import { useMatchMedia } from "../hooks/useMatchMedia";

type Props = {
  data: PostData;
};

/** 記事全文 */
const ArticleDetail = ({ data }: Props) => {
  const tags = data.meta.tags;
  const isSmallScreen = useMatchMedia("(max-width: 800px)");
  const isExtraSmallScreen = useMatchMedia("(max-width: 576px)");
  const isNarrowScreen = useMatchMedia("(max-width: 430px)");

  return (
    <article itemProp="mainEntityOfPage">
      <Box 
        margin={{ top: 0, right: 25, bottom: 0, left: 25 }}
        marginLeft={isExtraSmallScreen ? 1 : 25}
        marginRight={isExtraSmallScreen ? 1 : 25}
        paddingX={isNarrowScreen ? 1 : 0}
        sx={{
          // backgroundColor: "#f5f6f6",
          minHeight: "100vh",
          "@media (max-width: 800px)": {
            maxWidth: isSmallScreen ? "450px" : "auto",
          },
          "@media (max-width: 576px)": {
            maxWidth: isExtraSmallScreen ? "200px" : "auto",
          },
          "@media (max-width: 430px)": {
            maxWidth: isNarrowScreen ? "100%" : "auto",
            padding: isNarrowScreen ? "0 10px" : "0",
          },
      }}>
      {/* ヘッダー */}
      <Header data={data.meta} />

      {/* 本文 */}
        <Body content={data.content} />
      

      {/* タグ一覧 */}
      <div className="max-w-2xl mx-auto py-6 border-t border-gray-500">
        {/* {tags.map((tag, i) => (
          <CustomLink
            key={i}
            href={`/tag/${tag.toLowerCase()}/1`}
            className="mr-4"
          >
            #{tag}
          </CustomLink>
        ))} */}
      </div>
      </Box>
    </article>
  );
};

export default ArticleDetail;
