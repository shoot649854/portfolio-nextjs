import { getPostDataBySlugAll, getSortedPostsMetaAll } from "@/repositories/all";

/** 記事詳細ページ向けの記事データを取得 */
export const getPost = async (slug: string) => {
  const postData = await getPostDataBySlugAll(slug);
  return postData;
};

/** 記事のスラッグ一覧を取得 */
export const getAllPostSlugs = () => {
  // 全記事を取得、スラッグのみの配列に変換
  const metaList = getSortedPostsMetaAll();
  const slugs = metaList.map((meta) => meta.slug);
  return slugs;
};
