import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '...',
  }
  
interface CustomCardProps {
  link: string;
  classes?: string;
}

const CustomCard = ({ link, classes }: CustomCardProps) => {
    const [metadata, setMetadata] = useState({ title: "", description: "" });
    const [favicon, setFavicon] = useState("");
    const router = useRouter();
  
    useEffect(() => {
      const fetchMetadata = async () => {
        try {
          const response = await fetch(`/api/open-graph?url=${link}`);
          const data = await response.json();
          setMetadata({ title: data.title, description: data.description });
          // Set favicon if available
          setFavicon(data.image);
        } catch (error) {
          console.error("Error fetching metadata:", error);
        }
      };
  
      fetchMetadata();
    }, [link]);

  const handleClick = () => {
    router.push(link);
  };

  return (
    <Card className={classes ?? ""} onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <Box display="flex" alignItems="center">
            {favicon && <img src={favicon} alt="Favicon" />}
            <Box ml={2}>
              <Typography variant="h5" component="h2">
                {metadata.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {metadata.description}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
