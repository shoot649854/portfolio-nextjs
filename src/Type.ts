import { ReactNode } from "react";

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

export interface ICodeSegment {
  code?: string;
  language: string;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  children?: ReactNode;
}

export interface IProjectHeader {
  projectTitle: string;
  editedDate: string;
  tags?: string[];
  imageSrcPath?: string;
  children?: ReactNode;
}

export interface IVideoSegment {
  source: string;
  type: string;
}

export interface MainFeaturedPostProps {
  title: string;
  description: string;
  image: string;
  imageText?: string;
  linkText?: string;
  LinkToPage: string;
  date: string;
}

export interface FeaturedPostProps {
  title: string;
  description: string;
  date: string;
  image: string;
  imageText?: string;
  LinkToPage: string;
}

export interface ArticleSection {
  type: string;
  variant?: string;
  content?: string;
  url?: string;
  description?: string;
}

export interface Article {
  projectTitle: string;
  editedDate: string;
  tags: string[];
  article: ArticleSection[];
}
