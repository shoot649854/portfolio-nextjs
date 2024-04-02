import type { PostData } from "@/Type";
import ArticleDetail from "@/component/GlobalLayout/Layout";
import { Box } from "@mui/material" ;
import { useMediaQuery } from "@mui/material";
import { useIsNarrowScreen, useIsExtraSmallScreen, useIsSmallScreen } from "../../constant/MediaQuery";
type Props = {
  post: PostData;
};

/** 記事詳細ページ用テンプレート */
const Post = ({ post }: Props) => {
  const isSmallScreen = useIsSmallScreen();
  const isExtraSmallScreen = useIsExtraSmallScreen();
  const isNarrowScreen = useIsNarrowScreen();

  return (
    <Box margin={
      isNarrowScreen ? 3 :
      isExtraSmallScreen ? 5 :
      isSmallScreen ? 5 : 5}>
        <ArticleDetail data={post} />
    </Box>
  );
};

export default Post;
