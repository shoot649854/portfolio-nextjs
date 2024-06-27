import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import GalleryCard from '../Gallery/GalleryCard';
import { GalleriesType } from '../Gallery/GalleryType';

const Gallery = ({ posts }: GalleriesType) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    mounted && (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography>
          {posts.map((post) => (
            <GalleryCard post={post}></GalleryCard>
          ))}
        </Typography>
      </Box>
    )
  );
};

export default Gallery;
