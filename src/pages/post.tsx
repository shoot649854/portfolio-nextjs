import { Typography } from "@mui/material"
import type { PostMeta } from "@/Type";
import type {  GetStaticProps } from "next";
import getPost from "@/service/Blog/accessToTop";
import { Box } from "@mui/system";
import Template from "@/component/template/gallery";
import { JSDOM } from 'jsdom';

type Props = {
    posts: PostMeta[];
    totalPage: number;
};

const post = ({ posts, totalPage }: Props) => {
    return (
        <Template totalPage={totalPage} posts={posts}/>
    );
};

  /** ビルド時のみの静的ページ生成 */
  export const getStaticProps: GetStaticProps = () => {
    const post = getPostByPath() // mdが記載されているファイルを取得
    const urls = getUrlList(post.content) // mdの中から、外部リンク（URL）を配列で取得
    const metas = await Promise.all(urls.map(async (url) => await getMetaData(url))) // metaタグの情報を取得
    const filteredMetas = metas.filter((m) => m !== undefined) // undefinedのものをfilter
    return {
      props: {
        ...
        metas: filteredMetas, // propsを使って、Postに渡す
      },
    }
    return {
      props: getPost(),
    };
  };
export default post;

export type Meta = {
  url: string
  title: string
  description: string
  image: string
}

async function getMetaData(url: string): Promise<Meta> {
  const metaData = {
    url,
    title: '',
    description: '',
    image: '',
  }
  try {
    const res = await fetch(url)
    const text = await res.text()
    const doms = new JSDOM(text)
    const metas = doms.window.document.getElementsByTagName('meta')

    for (const meta of metas) {
      const np = meta.getAttribute('name') || meta.getAttribute('property')
      if (typeof np !== 'string') continue
      if (np.match(/title/)) {
        metaData.title = meta.getAttribute('content')
      }
      if (np.match(/description/)) {
        metaData.description = meta.getAttribute('content').slice(0, 100)
      }
      if (np.match(/image/)) {
        metaData.image = meta.getAttribute('content')
      }
    }
  } catch (e) {
    console.error(e)
  }
  return metaData
}

function getUrlList(content: string): Array<string> {
  return content.match(/https?:\/\/[^\n\]]*/g) ?? []
}