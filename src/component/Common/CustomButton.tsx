import React from "react";
import { Typography } from "@mui/material";
import { useIsSmallScreen } from "../../constant/MediaQuery";
import { CustomButtonProps } from "@/constant/Interface";
import {
  StyledButton,
} from "@/constant/Styled";

function CustomButton({ icon, text, onClick }: CustomButtonProps) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <StyledButton
      variant="text"
      startIcon={icon}
      onClick={onClick}
      sx={{
        textTransform: "none",
        width: "auto",
        fontSize: isSmallScreen ? "0.5rem" : "inherit",
      }}
    >
      <Typography>{text}</Typography>
    </StyledButton>
  );
}

export default CustomButton;
