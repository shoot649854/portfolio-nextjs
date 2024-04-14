import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostMeta } from "@/Type";
import { retrieveFiles } from "@/utils/filepath";

/** 記事データ格納パス */
const postsDirectory = path.join(process.cwd(), "/posts");

/** 全記事のFrontMatterを取得 */
export const getAllMatterResults = () => {
  // 記事データを取得
  const files = retrieveFiles(postsDirectory);

  const matterResults = files
    .map((fullPath: string) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      if (matterResult.data.Status === "Published" && matterResult.data.docType === "Project") {
        return matterResult;
      } else {
        return null;
      }
    })
    .filter((result) => result !== null);

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
    Status: matter.Status ?? "Draft",
    docType: matter.docType ?? "Article",
    id: matter.id ?? "",
    slug: (matter.slug ?? "").toLowerCase(),
    title: matter.title ?? "Error",
    description: matter.description ?? "error occurred",
    date: matter.date ? formatDate(matter.date) : new Date().toISOString(),
    author: matter.author ?? "",
    coverImage: matter.image ?? "",
    category: matter.category ?? "",
    tags: matter.tags ?? [],
    relatedDoc1: matter.relatedDoc1 ?? "",
    relatedDoc2: matter.relatedDoc2 ?? "",
    relatedDoc3: matter.relatedDoc3 ?? "",
    relatedDoc4: matter.relatedDoc4 ?? "",
    relatedDoc5: matter.relatedDoc5 ?? "",
    editor_name: matter.editor_name ?? "",
    editor_img: matter.editor_img ?? "",
    editor_bio: matter.editor_bio ?? "",
    editor_social: matter.editor_social ?? []
  };
};
