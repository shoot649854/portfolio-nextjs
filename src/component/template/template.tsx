import type { PostMeta } from "@/Type";
import ArticleCard from "@/component/Article/ArticleCard";
// import Pagination from "components/common/pagination";
import { Box, Pagination } from '@mui/material';
import CarouselComponent from '../post/Carousel'

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
      <CarouselComponent posts={posts} total={total} current={current} />
    </Box>
  );
};

export default Template;