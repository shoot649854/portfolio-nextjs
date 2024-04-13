import { Avatar, Button, IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)({
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#eee",
    color: "#555"
  }
});

export const StyledButton = styled(Button)({
  color: "#FFF",
  "&:hover": {
    color: "#555"
  }
});

export const StyledAvatar = styled(Avatar)({
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"
  }
});
