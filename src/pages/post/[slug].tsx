import type { PostData } from "@/Type";
import type { GetStaticPaths, GetStaticProps } from "next";

import Template from "@/component/template/post";
import { getPost, getAllPostSlugs } from "@/service/All/accessToPost";
// import SEO from "components/common/seo";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { JSDOM } from "jsdom";
import { Metadata } from "next";
import { cache } from "react";

import { CardData, Meta } from "@/Type";
import { getFilePathFromSlug } from "@/utils/slugMapper";
import { getAllPostFileNames } from "@/utils/getAllPostFileNames";
import { getSrcSetFromPath } from "@/utils/getSrcSetFromPath";


type Props = {
  postData: PostData;
};

/** ページ本体 */
const Page = ({ postData }: Props) => {
  return (
    <>
      {/* <SEO meta={postData.meta} /> */}
      <Template post={postData} />
    </>
  );
};

/** 動的なルーティング対象の一覧を定義 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths: paths.map((path) => ({
      params: { slug: path }
    })),
    fallback: false
  };
};

/** ビルド時のみの静的ページ生成 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const postData = await getPost(slug);
  return { props: { postData } };
};

export default Page;


interface LinkProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: LinkProps): Promise<Metadata> {
  try {
    const {
      props: { meta },
    } = await getContents(params.slug);
    const title = meta.title;
    const description = meta.description;
    const imageUrl = meta.coverImage;
    const { lg } = getSrcSetFromPath(imageUrl);

    return {
      title,
      description,
      alternates: {
        canonical: params.slug,
      },
      icons: {
        icon: "/faviconDark.svg",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@tama20013",
        creator: "@tama20013",
        images: [
          {
            url: lg,
            width: 960,
            height: 540,
            alt: title,
          },
        ],
      },
      openGraph: {
        type: "article",
        title,
        description,
        images: [
          {
            url: lg,
            width: 960,
            height: 540,
            alt: title,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Page is Not Found",
      description: "Page is Not Found",
    };
  }
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = getAllPostFileNames(postsDirectory);

  const slugs = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { slug: data.slug };
  });

  return slugs;
}

export const dynamicParams = false;

function getUrlList(content: string): Array<string> {
  const splitContent = content.split(/\r\n|\n/);
  const sentence = splitContent.filter((sentence) => {
    const regexp = /^https:\/\//;
    if (regexp.test(sentence)) {
      return sentence;
    }
  });

  return sentence ?? [];
}

const getContents = cache(async (slug: string) => {
  const file = getFilePathFromSlug(slug);
  const post = fs.readFileSync(
    path.join(process.cwd(), "src/posts", file),
    "utf8"
  );
  const urls = getUrlList(post);
  let cardData = [] as CardData;
  const temps = await Promise.all(
    urls.map(async (url) => {
      const metas = await fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const metaData = {
            url: url,
            title: "",
            description: "",
            image: "",
            icon: "",
          };
          const doms = new JSDOM(text);
          const metas = doms.window.document.getElementsByTagName("meta");
          const links = doms.window.document.getElementsByTagName("link");
          for (let i = 0; i < links.length; i++) {
            let pro = links[i].rel;
            if (typeof pro == "string") {
              if (pro.match("icon")) {
                const data = links[i].getAttribute("href");
                const icon = data ? data : "";
                metaData.icon = icon;
              }
            }
          }

          for (let i = 0; i < metas.length; i++) {
            let pro = metas[i].getAttribute("property");
            if (typeof pro == "string") {
              if (pro.match("title")) {
                const data = metas[i].getAttribute("content");
                const title = data ? data : "";
                metaData.title = title;
              }
              if (pro.match("description")) {
                const data = metas[i].getAttribute("content");
                const description = data ? data : "";
                metaData.description = description;
              }
              if (pro.match("image") || pro.match("og:image")) {
                const data = metas[i].getAttribute("content");
                if (data && data.includes("http")) {
                  metaData.image = data;
                }
              }
            }
            pro = metas[i].getAttribute("name");

            if (typeof pro == "string") {
              if (pro.match("title")) {
                const data = metas[i].getAttribute("content");
                const title = data ? data : "";
                metaData.title = title;
              }
              if (pro.match("description")) {
                const data = metas[i].getAttribute("content");
                const description = data ? data : "";
                metaData.description = description;
              }
              if (pro.match("image") || pro.match("og:image")) {
                const data = metas[i].getAttribute("content");
                if (data && data.includes("http")) {
                  metaData.image = data;
                }
              }
            }
          }
          return metaData;
        })
        .catch((e) => {
          console.log(e);
        });
      return metas;
    })
  );
  cardData = temps.filter((temp) => temp !== undefined) as CardData;
  const { data, content } = matter(post);

  return {
    props: {
      post: content,
      meta: data as Meta,
      cardData,
    },
  };
});
