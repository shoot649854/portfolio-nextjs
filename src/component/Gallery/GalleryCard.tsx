import React from "react";
import { Box, Button, Paper, Typography, Link } from "@mui/material";
import { useIsSmallScreen } from "../../constant/MediaQuery";
import Image from "next/image";
import { GalleryType } from "./GalleryType";

const GalleryCard = ({ post }: GalleryType) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Link href={`/post/${post.slug}`} color="inherit" style={{ textDecoration: "none" }}>
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
          <Box display={"flex"} gap={"4px"} alignItems={"center"}></Box>
          <Box>
            <Typography
              variant="body2"
              component="h3"
              sx={{
                my: isSmallScreen ? 1 : 1
              }}
            >
              {post.author}
            </Typography>
          </Box>
          <Typography variant="body2">{post.date}</Typography>

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
            {post.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}>
            {post.tags.map((tag: string, index: number) => (
              <React.Fragment key={index}>
                <Link
                  href={`/post/${post.slug}`}
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
          <Image src={post.coverImage} alt={post.title} />
        </Box>
      </Paper>
    </Link>
  );
};

export default GalleryCard;
