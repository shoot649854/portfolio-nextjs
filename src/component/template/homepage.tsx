import type { PostMeta } from "@/Type";
import ArticleCard from "@/component/Article/ArticleCard";
// import Pagination from "components/common/pagination";
import { Box, Pagination, Typography } from '@mui/material';
import CarouselComponent from '../post/Carousel'
import TagSearch from "../post/TagSearch";

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
//   mode: string;
};

/** 記事一覧ページ用テンプレート */
const Template = ({ posts, total, current }: Props) => {
  const top5Posts = posts.slice(0, 5); 
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CarouselComponent posts={top5Posts} total={total} current={current} />
      <TagSearch posts={posts} totalPage={total} />
    </Box>
  );
};
export default Template;