import { useState, useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import { Box, Typography } from '@mui/material';
import 'react-medium-image-zoom/dist/styles.css';
import Image from 'next/image';

type Props = {
  title?: string;
  src?: string;
  alt?: string;
};

const ImageComponent = ({ title, src = '', alt = '' }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    mounted && (
      <Box
        className="my-8"
        alignContent="center"
        sx={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Zoom zoomMargin={100}>
          <Image src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
        </Zoom>
        <Typography align="center" color={'gray'}>
          {title}
        </Typography>
      </Box>
    )
  );
};

export default ImageComponent;
