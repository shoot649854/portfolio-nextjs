import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";

type Props = {
  title?: string;
  src?: string;
  alt?: string;
};

const ImageComponent = ({ title, src = "", alt = "" }: Props) => {
  const [mounted, setMounted] = useState(false);
  // During server-side rendering (SSR), the initial render should match what is rendered on the server to avoid hydration mismatches.
  // By using useEffect, you ensure that the code inside it (setting mounted to true) runs only after the initial server render.
  // This prevents React from attempting to hydrate the page with a different initial UI, avoiding hydration errors.
  useEffect(() => {
      setMounted(true)
  }, [])

  return (
    mounted &&
    <Box style={{ position: 'relative' }}>
      <Typography>{title}</Typography>
      <Image src={src} alt={alt} layout='fill' />
    </Box>
  );
};

export default ImageComponent;
