"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import BlogIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SearchIcon from "@mui/icons-material/Search";
import ProjectIcon from "@mui/icons-material/Work";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useIsSmallScreen } from "../../constant/MediaQuery";
import CustomButton from "../Common/CustomButton";
import profile from "@/../public/profile.jpeg";
import { StyledIconButton, StyledAvatar } from "@/constant/Styled";

const navigationButtons = [
  { icon: <HomeIcon />, text: "Home", route: "/" },
  { icon: <BlogIcon />, text: "Article", route: "/post" },
  { icon: <ProjectIcon />, text: "Projects", route: "/projects" },
  { icon: <PersonSearchIcon />, text: "AboutMe", route: "/about" }
];

interface NavigationButton {
  icon: JSX.Element;
  text: string;
  route: string;
}

interface HamburgerMenuProps {
  navigationButtons: NavigationButton[];
}

function HamburgerMenu({ navigationButtons }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 8
      }}
    >
      <StyledIconButton onClick={handleMenuToggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </StyledIconButton>
      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            right: -5,
            backgroundColor: "#000",
            padding: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            zIndex: 999
          }}
        >
          {navigationButtons.map((button, index) => (
            <CustomButton
              key={index}
              icon={button.icon}
              text={button.text}
              onClick={() => (window.location.href = button.route)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

function Header() {
  const router = useRouter();
  const isSmallScreen = useIsSmallScreen();

  return (
    <Box
      height="36px"
      paddingY={3}
      marginBottom="20px"
      alignItems={"center"}
      sx={{ display: "flex", justifyContent: "center", backgroundColor: "#000000" }}
    >
      {!isSmallScreen ? (
        <Box gap={isSmallScreen ? "0%" : "15%"} sx={{ display: "flex", justifyContent: "center" }}>
          <StyledIconButton>
            <SearchIcon />
          </StyledIconButton>

          <Box
            gap={isSmallScreen ? "0%" : "15%"}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {navigationButtons.map((button, index) => (
              <CustomButton
                key={index}
                icon={button.icon}
                text={button.text}
                onClick={() => router.push(button.route)}
              />
            ))}
          </Box>

          {!isSmallScreen && (
            <Box marginTop={"1%"}>
              <StyledAvatar alt="Profile Photo" sx={{ width: 36, height: 36 }}>
                <Image
                  src={profile}
                  alt="Profile Photo"
                  fill
                  sizes="(max-width: 600px) 36px, 72px"
                />
              </StyledAvatar>
            </Box>
          )}
        </Box>
      ) : (
        <HamburgerMenu navigationButtons={navigationButtons} />
      )}
    </Box>
  );
}

export default Header;
