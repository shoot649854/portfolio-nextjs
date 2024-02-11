import type { PostMeta } from "@/Type";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { retrieveFiles } from "@/utils/filepath";

/** 記事データ格納パス */
const postsDirectory = path.join(process.cwd(), "project");

/** 全記事のFrontMatterを取得 */
export const getAllMatterResults = () => {
  // 記事データを取得
  const files = retrieveFiles(postsDirectory);
  const matterResults = files.map((fullPath: any) => {
    // Markdownファイルを文字列として取得
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // metaデータをパース
    const matterResult = matter(fileContents);

    return matterResult;
  });

  return matterResults;
};

/** meta情報から必要なデータのみ抽出 */
export const extractPostMeta = (matter: { [key: string]: any }): PostMeta => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return {
    slug: (matter.slug ?? "").toLowerCase(),
    title: matter.title ?? "Error",
    description: matter.description ?? "error occurred",
    date: matter.date ? formatDate(matter.date) : new Date().toISOString(),
    author: matter.author ?? "",
    coverImage: matter.image ?? "",
    category: matter.category ?? "",
    tags: matter.tags ?? [],
  };
};
