import { Box } from "@mui/material";
import {
  useIsNarrowScreen,
  useIsExtraSmallScreen,
  useIsSmallScreen
} from "../../constant/MediaQuery";
import type { PostData } from "@/Type";
import Body from "@/component/post/Body";
import Header from "@/component/post/Header";

type Props = {
  data: PostData;
};

/** 記事全文 */
const ArticleDetail = ({ data }: Props) => {
  const isSmallScreen = useIsSmallScreen();
  const isExtraSmallScreen = useIsExtraSmallScreen();
  const isNarrowScreen = useIsNarrowScreen();

  return (
    <Box>
      <Box
        margin={{ top: 0, right: 25, bottom: 0, left: 25 }}
        marginLeft={isExtraSmallScreen ? 1 : 50}
        marginRight={isExtraSmallScreen ? 1 : 50}
        paddingX={isNarrowScreen ? 1 : 0}
        sx={{
          minHeight: "100vh",
          "@media (max-width: 800px)": {
            maxWidth: isSmallScreen ? "450px" : "auto"
          },
          "@media (max-width: 576px)": {
            maxWidth: isExtraSmallScreen ? "200px" : "auto"
          },
          "@media (max-width: 430px)": {
            maxWidth: "400%",
            padding: isNarrowScreen ? "0 10px" : "0"
          }
        }}
      >
        {/* ヘッダー */}
        <Header {...data} />

        {/* 本文 */}
        <Body content={data.content} />

        {/* タグ一覧 */}
      </Box>
    </Box>
  );
};

export default ArticleDetail;
