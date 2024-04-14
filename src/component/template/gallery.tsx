import { useState, useEffect } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import GalleryCard from "../Gallery/GalleryCard";

import type { PostMeta } from "@/Type";

type Props = {
  posts: PostMeta[];
};

const gallery = ({ posts }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography>
          {posts.map((post) => (
            <GalleryCard data={post}></GalleryCard>
          ))}
        </Typography>
      </Box>
    )
  );
};

export default gallery;
