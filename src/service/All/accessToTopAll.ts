import { PER_PAGE } from "@/constant/setting";
import { getSortedPostsMetaAll } from "@/repositories/all";

const getPostsAll = () => {
  const allPosts = getSortedPostsMetaAll();

  return {
    posts: allPosts,
    totalPage: Math.ceil(allPosts.length / PER_PAGE)
  };
};

export default getPostsAll;
