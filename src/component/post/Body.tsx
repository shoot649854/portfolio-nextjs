import React from "react";
import styles from "@/styles/article.module.scss";
import "highlight.js/styles/github-dark.css";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

import { Box } from "@mui/material";

import CustomLink from "@/component/Common/CustomLink";
import Image from "@/component/post/Image";
import CodeBlock from "./CodeBlock";

type Props = {
  content: string;
  img?: string; 
}

/** 記事本文 */
const Body = ({ content }: Props) => {

  const convertResult = content ? (
    <ReactMarkdown
      className="max-w-2xl mx-auto text-lg leading-loose roboto-font"
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }], rehypeRaw]}
      components={{
        h1: "h2",
        h2: "h3",
        h3: "h4",
        h4: "h5",
        h5: "h6",
        a: CustomLink,
        img: (props) => <Image {...props} />,
        code: CodeBlock,
      }}
    >
      {content}
    </ReactMarkdown>
  ) : null;

  return <Box className={styles.article}>{convertResult}</Box>;
};

export default Body;
