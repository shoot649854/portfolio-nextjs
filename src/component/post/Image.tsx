import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Props = {
  title?: string;
  src?: string;
  alt?: string;
};

const ImageComponent = ({ title, src = "", alt = "" }: Props) => {
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //     setMounted(true)
  // }, [])

  return (
    // mounted &&
    <Box className="my-8" sx={{ position: 'relative' }}>
      <Typography>{title}</Typography>
      <Zoom zoomMargin={100}>
        <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
      </Zoom>
    </Box>
  );
};

export default ImageComponent;
