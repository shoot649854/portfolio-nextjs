import { Box, Typography } from "@mui/material";
import {
  useIsLargeScreen,
  useIsLaptopScreen,
  useIsTabletLandscape,
  useIsTabletPortrait,
  useIsSmallScreen,
  useIsPhoneScreen,
  useIsExtraSmallScreen,
  useIsNarrowScreen,
  useIsSmallPhoneScreen
} from "../../constant/MediaQuery";
import type { PostData } from "@/Type";
import ArticleDetail from "@/component/GlobalLayout/Layout";

type Props = {
  post: PostData;
};

/** 記事詳細ページ用テンプレート */
const Post = ({ post }: Props) => {
  const IsLargeScreen = useIsLargeScreen();
  const IsLaptopScreen = useIsLaptopScreen();
  const IsTabletLandscape = useIsTabletLandscape();
  const IsTabletPortrait = useIsTabletPortrait();
  const IsSmallScreen = useIsSmallScreen();
  const IsPhoneScreen = useIsPhoneScreen();
  const IsExtraSmallScreen = useIsExtraSmallScreen();
  const IsNarrowScreen = useIsNarrowScreen();
  const IsSmallPhoneScreen = useIsSmallPhoneScreen();

  const getMargin = () => {
    if (IsSmallPhoneScreen || IsNarrowScreen || IsExtraSmallScreen) return 3;
    if (IsExtraSmallScreen || IsPhoneScreen || IsSmallScreen) return 5;
    if (IsLargeScreen || IsLaptopScreen || IsTabletLandscape || IsTabletPortrait) return 5;
    return 5;
  };

  const extractTags = (content: string) => {
    return content.match(/#\w+/g) || [];
  };
  const tags = extractTags(post.content);

  return (
    <Box margin={getMargin()} display="flex" flexDirection="row" alignItems="center">
      <ArticleDetail data={post} />
    </Box>
  );
};

export default Post;
