import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import profile from "@/../public/profile.jpeg";
import { useIsSmallScreen } from "@/constant/MediaQuery";

const AboutMe = () => {
  const isSmallScreen = useIsSmallScreen();
  return (
    <Box
      sx={{
        marginTop: "28px",
        width: "100%",
        maxWidth: "1474px",
        "@media (max-width: 767px)": {
          marginTop: "10px",
          maxWidth: "100%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          "@media (max-width: 767px)": {
            flexDirection: "column",
            gap: "0",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            "@media (max-width: 767px)": {
              width: "100%",
              marginLeft: "0",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              paddingBottom: "2px",
              marginTop: "12px",
              "@media (max-width: 767px)": {
                marginTop: "10px",
                maxWidth: "100%",
              },
            }}
          >
            <Box
              marginX={'10%'}
              sx={{
                fontSize: "80px",
                fontWeight: "bold",
                color: "black",
                "@media (max-width: 767px)": {
                  maxWidth: "100%",
                  fontSize: isSmallScreen ? "36px" : "4xl",
                },
              }}
            >
              Always be moving.
            </Box>
            <Box marginX={'10%'} className="mt-16 text-2xl font-thin text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              I would call myself a Machine Learning engineer where I am capable
              of visualizing data with matplotlib, using a machine learning
              model to estimate its value with Tensorflow, the same estimation
              with different libraries, Keras, and performing our project on a
              web application with Flask and streamlit. I am interested in
              following fields; Machine Learning, Data Science, Web Application,
              Cybersecurity & information security, Automation.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: isSmallScreen ? 5 : 0,
            width: isSmallScreen ? '50%' : 'auto',
            '@media (max-width: 600px)': {
              marginLeft: 0,
              width: '100%',
            },
          }}
        >
          <Box
            margin={'10%'}
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "start",
              borderRadius: "2xl",
              backgroundColor: "stone-300",
              "@media (max-width: 767px)": {
                marginTop: "10px",
                maxWidth: "100%",
              },
            }}
          >
            <Image src={profile} alt="Profile Photo" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
