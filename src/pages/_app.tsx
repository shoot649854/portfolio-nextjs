import "tailwindcss/tailwind.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import Footer from "@/component/GlobalLayout/Footer";
import Header from "@/component/GlobalLayout/Header";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Box>
  );
}

export default App;
