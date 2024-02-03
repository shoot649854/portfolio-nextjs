import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { Box } from '@mui/material';
import Header from "@/component/globalLayou/Header";
import Footer from "@/component/globalLayou/Footer";

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
