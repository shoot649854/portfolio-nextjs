import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { useMatchMedia } from "@/component/hooks/useMatchMedia";
import { Box } from "@mui/material";
import Header from "@/component/GlobalLayout/Header";
import Footer from "@/component/GlobalLayout/Footer";
import Background from "./Background/Background";

function App({ Component, pageProps }: AppProps) {
  const isSmallScreen = useMatchMedia("(max-width: 800px)");
  const isExtraSmallScreen = useMatchMedia("(max-width: 576px)");
  const isNarrowScreen = useMatchMedia("(max-width: 430px)");

  return (
    <Box>
      <Header />
      {/* <Box
          padding={{ top: 3, right: 20, bottom: 10, left: 20 }}
          paddingTop={3}
          paddingRight={isSmallScreen? 2: 25}
          paddingBottom={10}
          paddingLeft={isSmallScreen? 2: 25}
          sx={{
            borderRadius: "1%",
            flexGrow: 1,
            backgroundColor: "#fff",
          }}
        >
          
        <Background />
      </Box> */}
      <Component {...pageProps} />
      <Footer />
    </Box>
  );
}


export default App;
