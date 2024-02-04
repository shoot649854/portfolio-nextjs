import { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Avatar, Typography, Alert, useMediaQuery } from "@mui/material";
import profile from "@/../profile/profile.jpeg"
import { IProjectHeader } from "@/Type";

const Tags = ({ tags }: { tags: string[] }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 1 }}>
      {tags.map((tag: any, index: number) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: isSmallScreen ? 0 : 0.25 }}>
          <Box component="text" sx={{ padding: isSmallScreen ? '2px 0' : '2px 5px', borderRadius: '5px', margin: isSmallScreen ? '2px 0' : '0' }}>
            <Typography variant="subtitle2" color="primary">
              {tag}
            </Typography>
          </Box>
          {index < tags.length - 1 && <Typography variant="subtitle2" color="black" display={isSmallScreen ? 'none' : 'block'}>,</Typography>}
        </Box>
      ))}
    </Box>
  );
};


const ProjectHeader = ({ projectTitle, editedDate, imageSrcPath, tags, children }: IProjectHeader) => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const [customProfile, setCustomProfile] = useState(null);

  useEffect(() => {
    try {
      const profileImage = imageSrcPath ? require(imageSrcPath) : null;
      setCustomProfile(profileImage);
    } catch (error) {
      setImageLoadError(true);
      setTimeout(() => {
        setImageLoadError(false);
      }, 5000);
    }
  }, [imageSrcPath]);

  return (
    <>
    {imageLoadError && (
      <Alert severity="error" sx={{ transition: "opacity 0.5s ease-in-out" }}>
        Failed to load image. Using default image.
      </Alert>
    )}

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Avatar alt="Profile Photo" sx={{ width: 36, height: 36 }}> 
          <Image src={profile} alt="Profile Photo" fill sizes="(max-width: 600px) 36px, 72px"/>
        </Avatar>
        
        <Typography variant="h3" fontSize="15px" fontWeight="Medium" color="black" marginBottom="10px" fontFamily="sans-serif">
          Shoto Morisaki
        </Typography>
      </Box>
      <Typography variant="h3" fontSize="42px" fontWeight="Medium" color="black" marginBottom="10px" fontFamily="sans-serif">
        {projectTitle}
      </Typography>
      <Typography variant="subtitle1">
        Edited Date: {editedDate}
      </Typography>
      {tags && <Tags tags={tags} />}
      {children}
    </>
  );
};

export default ProjectHeader;
