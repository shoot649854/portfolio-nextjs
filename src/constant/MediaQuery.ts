import { useMediaQuery } from "@mui/material";

export const useIsSmallScreen = () => {
  return useMediaQuery("(max-width:700px)");
};

export const useIsExtraSmallScreen = () => {
  return useMediaQuery("(max-width: 576px)");
};

export const useIsNarrowScreen = () => {
  return useMediaQuery("(max-width: 430px)");
};
