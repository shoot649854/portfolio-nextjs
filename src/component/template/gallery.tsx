import { useState, useEffect } from 'react'
import { Typography } from "@mui/material"
import type { PostMeta } from "@/Type";
import { Box } from "@mui/system";
import GalleryCard from '../Gallery/GalleryCard';

type Props = {
    posts: PostMeta[];
    totalPage: number;
};

const gallery = ({ posts, totalPage }: Props) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true)
  }, [])
  
    return (
        mounted && 
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>
                {posts.map((post, index) => (
                    <GalleryCard data={post}></GalleryCard>

                ))}
            </Typography>
        </Box>
    );
};

export default gallery;