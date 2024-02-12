import type { PostData } from "@/Type";
import ArticleDetail from "@/component/post/Layout";
import { Box } from "@mui/material" ;
import { useMatchMedia } from "../hooks/useMatchMedia";

type Props = {
  post: PostData;
};

/** 記事詳細ページ用テンプレート */
const Post = ({ post }: Props) => {
  const isSmallScreen = useMatchMedia("(max-width: 800px)");
  const isExtraSmallScreen = useMatchMedia("(max-width: 576px)");
  const isNarrowScreen = useMatchMedia("(max-width: 430px)");

  return (
    <Box margin={
      isNarrowScreen ? 3 : 
      isExtraSmallScreen ? 5 :
      isSmallScreen ? 8 : 10}>
        <ArticleDetail data={post} />
    </Box>
  );
};

export default Post;
