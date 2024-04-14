import { useState } from "react";
import Carousel from "react-material-ui-carousel";

import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Typography, Box, Link, Grid } from "@mui/material";

import { useIsSmallScreen } from "../../constant/MediaQuery";

import type { PostMeta } from "@/Type";

// const lColor = "black";
const bgColor = "white";
const ArrowColor = "blue";
const ArrowColor_bg = "white";
const Icon = "lightskyblue";
const ActiveIcon = "midnightblue";
const fontBackgroundColor = "rgb(252, 252, 252)";

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
  //   mode: string;
};

function CarouselComponent({ posts, total }: Props) {
  const isSmallScreen = useIsSmallScreen();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (currentIndex < 0) setCurrentIndex(0);
  if (currentIndex >= total) setCurrentIndex(total - 1);

  const handleIndexChange = (now?: number) => {
    if (now !== undefined) {
      let newIndex = (currentIndex + 1) % total;
      if (newIndex === 5) {
        newIndex = 0;
      }
      setCurrentIndex(newIndex);
      console.log("Index changed:", newIndex);
    }
  };

  return (
    <Box marginBottom={3} sx={{ height: "100%", width: isSmallScreen ? "95%" : "75%" }}>
      <Carousel
        NextIcon={<ArrowForwardIosSharpIcon />} //矢印アイコンを別のアイコンに変更
        PrevIcon={<ArrowBackIosSharpIcon />} //矢印アイコンを別のアイコンに変更
        autoPlay={isSmallScreen} //自動でCarouselを動かすかどうか(true or false)
        //stopAutoPlayOnHover = {true} Carouselの上にマウスを置いている間、自動スクロールを継続するかどうか
        //interval = {4000} 自動でCarouselを動かす時間の間隔(ミリ秒単位)
        //animation = {fade} (fade or slide) Carouselのアニメーションの種類を変更
        //duration = {500} アニメーションの長さを定義
        swipe={isSmallScreen} // スワイプで動かせるかどうか
        //indicators = {true} インジケーター(下の丸いアイコン)が必要かどうか
        navButtonsAlwaysVisible={!isSmallScreen} //常に矢印アイコンを表示するかどうか
        //navButtonsAlwaysInvisible = {true} //常に矢印アイコンを非表示にするかどうか
        //cycleNavigation = {true} //最後のスライドから「次へ」の矢印アイコンを押した時に最初にスライドに動かせるようにするかどうか
        //fullHeightHover = {true} //次/前のボタンがItem要素の高さ全体をカバーし、ホバー時にボタンを表示するかどうか

        indicatorContainerProps={{
          style: {
            margin: "0px 0px 0px 0px"
          }
        }}
        indicatorIconButtonProps={{
          //アクティブでない下の丸いアイコンの設定
          style: {
            padding: "10px", //位置調整
            color: Icon
          }
        }}
        activeIndicatorIconButtonProps={{
          //アクティブな下の丸いアイコンの設定
          style: {
            color: ActiveIcon
          }
        }}
        navButtonsWrapperProps={{
          //矢印ボタン周りの設定
          style: {
            margin: "-20px 0% 0px" //位置調整
          }
        }}
        navButtonsProps={{
          //矢印ボタンの設定
          style: {
            color: ArrowColor, //矢印の色
            backgroundColor: ArrowColor_bg, //矢印の背景の色
            borderRadius: 0 //0にすると四角になる．
          }
        }}
        onChange={handleIndexChange}
      >
        {posts &&
          posts.map((post) => (
            <Link
              href={`/post/${post.slug}`}
              color="inherit"
              style={{ textDecoration: "none" }}
              key={post.slug}
            >
              <Box sx={{ height: "500px", width: "100%", backgroundColor: bgColor }}>
                <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                  <Box sx={{ height: "100%", width: "100%" }}>
                    <Box
                      sx={{
                        height: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      component="img"
                      src={post.coverImage}
                      alt="Carousel Image"
                    />
                  </Box>
                  <Box width={"65%"} margin={3} sx={{ position: `absolute` }}></Box>
                </Grid>
              </Box>
            </Link>
          ))}
      </Carousel>
      <Typography
        sx={{
          // mt: isSmallScreen ? 3 : 10,
          backgroundColor: `rgba(${fontBackgroundColor}, 0.8)`,
          fontWeight: "medium",
          "@media (max-width: 700px)": {
            // fontSize: "24px",
          }
        }}
        variant="h4"
      >
        {posts[currentIndex].title}
      </Typography>
    </Box>
  );
}

export default CarouselComponent;
