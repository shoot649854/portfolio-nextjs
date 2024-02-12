import { PER_PAGE } from "@/constant/setting";
import { getSortedPostsMetaProject } from "@/repositories/project";

/** トップページ向けの記事一覧と全ページ数を取得 */
const getPosts = () => {
  const allPosts = getSortedPostsMetaProject();
  const posts = allPosts.slice(0, PER_PAGE);

  return {
    posts: posts,
    totalPage: allPosts.length,
  };
};

export default getPosts;