// import React { useState } from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import {
  useIsLargeScreen,
  useIsLaptopScreen,
  useIsTabletLandscape,
  useIsTabletPortrait,
  useIsSmallScreen,
  useIsPhoneScreen,
  useIsExtraSmallScreen,
  useIsNarrowScreen,
  useIsSmallPhoneScreen
} from "../../constant/MediaQuery";
import type { PostData } from "@/Type";
import ArticleDetail from "@/component/GlobalLayout/Layout";

type Props = {
  data: PostData;
};

const IndexBar = ({ data }: Props) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h1, h2, h3");
      let activeSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          activeSection = section.id;
        }
      });
      setActiveId(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const extractTags = (content: string) => {
    const h1Tags = content.match(/^# (.*)$/gm) || [];
    const h2Tags = content.match(/^## (.*)$/gm) || [];
    const h3Tags = content.match(/^### (.*)$/gm) || [];

    const extractContent = (tags: string[]) => tags.map((tag) => tag.replace(/^#{1,3} /, ""));

    return {
      h1: extractContent(h1Tags),
      h2: extractContent(h2Tags),
      h3: extractContent(h3Tags)
    };
  };

  const tags = extractTags(data.content);

  const addIdToHeadings = (content: string) => {
    let updatedContent = content;

    tags.h1.forEach((tag, index) => {
      updatedContent = updatedContent.replace(
        new RegExp(`^# ${tag}`, "m"),
        `<h1 id="h1-${index}">${tag}</h1>`
      );
    });

    tags.h2.forEach((tag, index) => {
      updatedContent = updatedContent.replace(
        new RegExp(`^## ${tag}`, "m"),
        `<h2 id="h2-${index}">${tag}</h2>`
      );
    });

    tags.h3.forEach((tag, index) => {
      updatedContent = updatedContent.replace(
        new RegExp(`^### ${tag}`, "m"),
        `<h3 id="h3-${index}">${tag}</h3>`
      );
    });

    return updatedContent;
  };

  const updatedContent = addIdToHeadings(data.content);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box
        position="fixed"
        right={10}
        top={"150px"}
        width="250px"
        zIndex={1000}
        p={2}
        bgcolor="background.paper"
        sx={{ border: "1px solid grey", borderRadius: 2 }}
      >
        <Typography variant="h6">Index</Typography>
        {tags.h1.length > 0 && (
          <Box mt={2}>
            {tags.h1.map((tag, index) => (
              <Link
                key={index}
                href={`#${index}`}
                variant="body2"
                display="block"
                sx={{ color: activeId === `h1-${index}` ? "blue" : "inherit" }}
              >
                {tag}
              </Link>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default IndexBar;
