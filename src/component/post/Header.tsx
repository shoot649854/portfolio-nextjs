import { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Avatar, Typography, Alert, useMediaQuery, useTheme } from "@mui/material";
import profile from '@/../public/profile.jpeg'
import { PostData } from "@/Type";

const Tags = ({ tags }: { tags: string[] }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 1 }}>
      {tags.map((tag: any, index: number) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: isSmallScreen ? 0 : 0.25 }}>
          <Box component="text" sx={{ borderRadius: '5px', margin: isSmallScreen ? '2px' : '0' }}>
            <Typography variant="subtitle2" color="primary" style={{textDecoration: "none"}}>
              {tag}
            </Typography>
          </Box>
          {index < tags.length - 1 && <Typography variant="subtitle2" color="black" display={isSmallScreen ? 'none' : 'block'}>,</Typography>}
        </Box>
      ))}
    </Box>
  );
};


const ProjectHeader = ({ meta }: PostData) => {
  const { title, date, tags } = meta;
  const [imageLoadError, setImageLoadError] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const H1FontSize = isSmallScreen ? '22px' : '28px';


  return (
    <>
    {imageLoadError && (
        <Alert severity="error" sx={{ transition: "opacity 0.5s ease-in-out" }}>
          Failed to load image. Using default image.
        </Alert>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar alt="Profile Photo" sx={{ width: 24, height: 24 }}> 
            <Image src={profile} alt="Profile Photo" fill sizes="(max-width: 600px) 36px, 72px"/>
          </Avatar>
          
          <Typography variant="h3" fontSize="15px" fontWeight="Medium" color="black" fontFamily="sans-serif">
            Shoto Morisaki
          </Typography>
        </Box>
        <Typography variant="h3" fontSize={H1FontSize} fontWeight="Medium" color="black" fontFamily="sans-serif">
          {title}
        </Typography>
        
        {tags && <Tags tags={tags} />}
        
        <Typography variant="subtitle1">
          Edited Date: {date}
        </Typography>
        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />
      </Box>
    </>
  );
};
export default ProjectHeader;
