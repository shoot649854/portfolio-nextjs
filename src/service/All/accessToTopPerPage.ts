import { PER_PAGE } from "@/constant/setting";
import { getSortedPostsMeta } from "@/repositories/post";
import { getSortedPostsMetaProject } from "@/repositories/project";

/** トップページ向けの記事一覧と全ページ数を取得 */
const getPostsPerPage = () => {
  const allPosts = [...getSortedPostsMeta(), ...getSortedPostsMetaProject()];
  const posts = allPosts.slice(0, PER_PAGE);

  return {
    posts: posts,
    totalPage: allPosts.length
  };
};

export default getPostsPerPage;
