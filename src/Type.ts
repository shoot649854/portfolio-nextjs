/** 本文含まない記事データ */
export type PostMeta = {
  Status: "Draft" | "Pending" | "Published" | "Rewriting"; // Added Status field
  docType: "Article" | "Project"; // Added docType field
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  coverImage: string;
  category: string;
  tags: string[];
  relatedDoc1: string;
  relatedDoc2: string;
  relatedDoc3: string;
  relatedDoc4: string;
  relatedDoc5: string;
  editor_name: string;
  editor_img: string;
  editor_bio: string;
  editor_social: {
    icon: string;
    url: string;
  }[];
};

/** 本文含む記事データ */
export type PostData = {
  meta: PostMeta;
  content: string;
};