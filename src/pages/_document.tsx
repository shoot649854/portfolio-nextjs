import { Box } from "@mui/material";
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <Box
          sx={{
            backgroundColor: "rgb(255,255,255)", // Background Color
            color: "rgba(17, 24, 39, var(--tw-text-opacity))", // text-gray-900
            minHeight: "100vh", // min-h-screen
            overflowX: "hidden" // overflow-x-hidden
          }}
        >
          <Main />
          <NextScript />
        </Box>
      </Html>
    );
  }
}

export default MyDocument;
