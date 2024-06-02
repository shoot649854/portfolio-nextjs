import { useMediaQuery } from "@mui/material";

// Desktop view (large screens)
export const useIsLargeScreen = () => {
  return useMediaQuery("(min-width: 1200px)");
};

// Laptop view
export const useIsLaptopScreen = () => {
  return useMediaQuery("(min-width: 992px) and (max-width: 1199px)");
};

// Tablet view (landscape)
export const useIsTabletLandscape = () => {
  return useMediaQuery("(min-width: 768px) and (max-width: 991px)");
};

// Tablet view (portrait)
export const useIsTabletPortrait = () => {
  return useMediaQuery("(min-width: 600px) and (max-width: 767px)");
};

export const useIsSmallScreen = () => {
  return useMediaQuery("(max-width:700px)");
};

// Phone view (small screens)
export const useIsPhoneScreen = () => {
  return useMediaQuery("(max-width: 599px)");
};

// Extra small phone view
export const useIsExtraSmallScreen = () => {
  return useMediaQuery("(max-width: 480px)");
};

export const useIsNarrowScreen = () => {
  return useMediaQuery("(max-width: 430px)");
};

// Very narrow phone view
export const useIsSmallPhoneScreen = () => {
  return useMediaQuery("(max-width: 320px)");
};