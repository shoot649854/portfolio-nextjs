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

const Post = ({ post }: Props) => {
  return (
    <Box position={"fixed"} zIndex={1000} top={10}>
      <Typography> hello</Typography>
    </Box>
  );
};
