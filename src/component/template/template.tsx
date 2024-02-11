import type { PostMeta } from "@/Type";
// import ArticleCard from "../Article/ArticleCard";
import ArticleCard from "@/component/Article/ArticleCard";
// import Pagination from "components/common/pagination";
import { Box, Pagination } from '@mui/material';

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
//   mode: string;
};

/** 記事一覧ページ用テンプレート */
const Template = ({ posts, total, current }: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {posts?.map((post, i) => (
        <ArticleCard key={i} data={post} />
        ))}

        <Pagination count={total} page={current} variant="outlined" shape="rounded" />
    </Box>
        
  );
};

export default Template;