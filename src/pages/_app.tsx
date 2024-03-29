import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { useMatchMedia } from "@/component/hooks/useMatchMedia";
import { Box } from "@mui/material";
import Header from "@/component/GlobalLayout/Header";
import Footer from "@/component/GlobalLayout/Footer";

function App({ Component, pageProps }: AppProps) {
  const isSmallScreen = useMatchMedia("(max-width: 800px)");
  const isExtraSmallScreen = useMatchMedia("(max-width: 576px)");
  const isNarrowScreen = useMatchMedia("(max-width: 430px)");

  return (
    <Box>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Box>
  );
}

export default App;
