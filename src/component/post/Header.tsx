import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useIsSmallScreen } from "../../constant/MediaQuery";
import profile from "@/../public/profile.jpeg";
import { PostData } from "@/Type";

const Tags = ({ tags }: { tags: string[] }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
      {tags.map((tag: string, index: number) => (
        <React.Fragment key={index}>
          <Link href={`#${tag}`} passHref>
            {/* TODO: Link to Tag page */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box component="span" sx={{ borderRadius: "5px" }}>
                <Typography variant="subtitle2" color="primary">
                  {tag}
                </Typography>
              </Box>
              {index < tags.length - 1 && (
                <Typography
                  variant="subtitle2"
                  color="black"
                  display={isSmallScreen ? "none" : "block"}
                >
                  ,
                </Typography>
              )}
            </Box>
          </Link>
        </React.Fragment>
      ))}
    </Box>
  );
};

const ProjectHeader = ({ meta }: PostData) => {
  const { title, date, tags } = meta;
  const isSmallScreen = useIsSmallScreen();
  const H1FontSize = isSmallScreen ? "22px" : "28px";

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar alt="Profile Photo" sx={{ width: 24, height: 24 }}>
            <Image src={profile} alt="Profile Photo" fill sizes="(max-width: 600px) 36px, 72px" />
          </Avatar>

          <Typography
            variant="h3"
            fontSize="15px"
            fontWeight="inherit"
            color="black"
            fontFamily="sans-serif"
          >
            Shoto Morisaki / {date}
          </Typography>
        </Box>
        <Typography
          variant="h3"
          fontSize={H1FontSize}
          fontWeight="Bold"
          color="black"
          fontFamily="sans-serif"
        >
          {title}
        </Typography>

        {tags && <Tags tags={tags} />}

        <Box sx={{ borderBottom: "1px solid black", marginBottom: "10px" }} />
      </Box>
    </Box>
  );
};
export default ProjectHeader;
