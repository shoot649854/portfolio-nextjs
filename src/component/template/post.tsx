import type { PostData } from "@/Type";
import ArticleDetail from "@/component/post/Layout";
import { Box } from "@mui/material" ;

type Props = {
  post: PostData;
};

/** 記事詳細ページ用テンプレート */
const Post = ({ post }: Props) => {
  return (
    <Box margin={10}>
        <ArticleDetail data={post} />
    </Box>
  );
};

export default Post;
