import React from "react";
import { Box, Button, Paper, Typography, Link } from "@mui/material";
import { useIsSmallScreen } from "../../constant/MediaQuery";
import { PostMeta } from "@/Type";
type Props = {
  data: PostMeta;
};

const GalleryCard = ({ data }: Props) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Link href={`/post/${data.slug}`} color="inherit" style={{ textDecoration: "none" }}>
      <Paper
        sx={{
          height: isSmallScreen ? "auto" : "300px",
          mx: "10%",
          mb: 3,
          bgcolor: "white",
          position: "relative",
          boxShadow: "xl",
          transition: "box-shadow 0.5s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          "&:hover": {
            boxShadow: "2xl"
          },
          "@media (min-width: 768px)": {
            flexDirection: "row"
            // "&:nth-of-type(even)": {
            //   flexDirection: "row-reverse"
            // }
          }
        }}
      >
        <Box
          sx={{
            flexGrow: 0,
            width: "80%",
            pt: 2,
            pb: 2,
            px: 2,
            "@media (min-width: 768px)": {
              width: "45%"
            }
          }}
        >
          <Box display={"flex"} gap={"4px"} alignItems={"center"}>
            {/* <Avatar alt="Profile Photo" sx={{ width: 24, height: 24 }}>
              <Image src={data.editor_img} alt="Profile Photo" fill sizes="(max-width: 600px) 36px, 72px" />
            </Avatar> */}
          </Box>
          <Box>
            <Typography
              variant="body2"
              component="h3"
              sx={{
                my: isSmallScreen ? 1 : 1
                // fontSize: isSmallScreen ? "21px" : "inherit"
              }}
            >
              {data.author}
            </Typography>
          </Box>
          <Typography variant="body2">{data.date}</Typography>

          <Typography
            variant="body2"
            sx={{
              mb: isSmallScreen ? 0.5 : 2,
              height: "auto",
              overflow: "hidden",
              fontSize: isSmallScreen ? "16px" : "20px",
              fontWeight: "bold"
            }}
          >
            {data.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}>
            {data.tags.map((tag: string, index: number) => (
              <React.Fragment key={index}>
                <Link
                  href={`/post/${data.slug}`}
                  color="inherit"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      fontSize: isSmallScreen ? "8px" : "12px",
                      marginLeft: index > 0 ? "8px" : "0",
                      textDecoration: "none",
                      textTransform: "none",
                      backgroundColor: "#494b4b"
                    }}
                  >
                    {tag}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            height: isSmallScreen ? "auto" : "100%",
            width: isSmallScreen ? "100%" : "55%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            flexGrow: 0
          }}
        >
          <img src={data.coverImage} alt={data.title} />
        </Box>
      </Paper>
    </Link>
  );
};

export default GalleryCard;
