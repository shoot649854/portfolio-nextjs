import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Typography, Box, Link, Grid } from "@mui/material";
import {
  useIsSmallScreen,
  useIsExtraSmallScreen,
  useIsNarrowScreen
} from "../../constant/MediaQuery";
import type { PostMeta } from "@/Type";

// const lColor = "black";
const bgColor = "white";
const ArrowColor = "blue";
const ArrowColor_bg = "white";
const Icon = "lightskyblue";
const ActiveIcon = "midnightblue";
// const fontBackgroundColor = "rgb(252, 252, 252)";

type Props = {
  posts: PostMeta[];
  total: number;
  current: number;
  //   mode: string;
};

function CarouselComponent({ posts, total }: Props) {
  const isSmallScreen = useIsSmallScreen();
  const ExtraSmallScreen = useIsExtraSmallScreen();
  const NarrowScreen = useIsNarrowScreen();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (currentIndex < 0) setCurrentIndex(0);
  if (currentIndex >= total) setCurrentIndex(total - 1);

  const calculateHeight = () => {
    let height = 900;
    if (ExtraSmallScreen) {
      height = 400;
    } else if (isSmallScreen) {
      height = 500;
    } else if (NarrowScreen) {
      height = 300;
    }
    return height;
  };

  const handleIndexChange = (now?: number) => {
    if (now !== undefined) {
      let newIndex = (currentIndex + 1) % total;
      if (newIndex === 5) {
        newIndex = 0;
      }
      setCurrentIndex(newIndex);
    }
  };

  return (
    <Box
      marginBottom={5}
      sx={{
        height: `${calculateHeight()}px`,
        width: isSmallScreen ? "95%" : "75%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Carousel
        NextIcon={<ArrowForwardIosSharpIcon />}
        PrevIcon={<ArrowBackIosSharpIcon />} //矢印アイコンを別のアイコンに変更
        autoPlay={isSmallScreen} //自動でCarouselを動かすかどうか(true or false)
        //stopAutoPlayOnHover = {true} Carouselの上にマウスを置いている間、自動スクロールを継続するかどうか
        //interval = {4000} 自動でCarouselを動かす時間の間隔(ミリ秒単位)
        //animation = {fade} (fade or slide) Carouselのアニメーションの種類を変更
        //duration = {500} アニメーションの長さを定義
        swipe={isSmallScreen} // スワイプで動かせるかどうか
        indicators={false} // インジケーター(下の丸いアイコン)が必要かどうか
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
          posts.map((post, index) => (
            <Link
              href={`/post/${post.slug}`}
              color="inherit"
              style={{ textDecoration: "none" }}
              key={post.slug}
            >
              <Box
                sx={{
                  height: `${calculateHeight()}px`,
                  width: "100%",
                  backgroundColor: bgColor,
                  position: "relative"
                }}
              >
                <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                  <Box sx={{ height: "100%", width: "100%" }}>
                    <Box
                      sx={{
                        height: `${calculateHeight()}px`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden"
                      }}
                    >
                      <img
                        style={{ width: "100%", objectFit: "cover" }}
                        src={post.coverImage}
                        alt="Carousel Image"
                      />
                    </Box>
                  </Box>
                  <Box width="65%" sx={{ position: "absolute", bottom: 0, left: 0 }}>
                    <Typography
                      sx={{
                        fontWeight: "medium",
                        fontSize: ExtraSmallScreen
                          ? "16px"
                          : isSmallScreen
                            ? "20px"
                            : NarrowScreen
                              ? "16px"
                              : "36px",
                        padding: "10px",
                        backgroundColor: "white",
                        opacity: currentIndex === index ? 1 : 0,
                        animation: `${currentIndex === index ? "fade-in-left" : "fade-out"} 0.5s ease-in-out forwards`,
                        "@keyframes fade-in-left": {
                          from: { opacity: 0, transform: "translateX(-50px)" },
                          to: { opacity: 1, transform: "translateX(0)" }
                        },
                        "@keyframes fade-out": {
                          from: { opacity: 1 }, // Animation starts from opacity 1
                          to: { opacity: 0 } // Animation ends at opacity 0
                        }
                      }}
                    >
                      {post.title}
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Link>
          ))}
      </Carousel>
    </Box>
  );
}

export default CarouselComponent;
