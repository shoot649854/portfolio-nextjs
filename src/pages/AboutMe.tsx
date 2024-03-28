import React from 'react';
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import profile from '@/../public/profile.jpeg';

const AboutMe = () => {
  return (
    <Box 
    sx={{
            marginTop: '28px',
            width: '100%',
            maxWidth: '1474px',
            '@media (max-width: 767px)': {
              marginTop: '10px',
              maxWidth: '100%'
            }
    }}>
      <Box sx={{
        display: 'flex',
        gap: '5px',
        '@media (max-width: 767px)': {
          flexDirection: 'column',
          gap: '0'
        }
      }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            '@media (max-width: 767px)': {
              width: '100%',
              marginLeft: '0'
            }
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            paddingBottom: '2px',
            marginTop: '12px',
            '@media (max-width: 767px)': {
              marginTop: '10px',
              maxWidth: '100%'
            }
          }}>
            <Box sx={{
                fontSize: '80px',
                fontWeight: 'bold',
                color: 'black',
                '@media (max-width: 767px)': {
                  maxWidth: '100%',
                  fontSize: '4xl'
                }
            }} > 
                
              Always be moving.
            </Box>
            <Box className="mt-16 text-2xl font-thin text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              I would call myself a Machine Learning engineer where I am
              capable of visualizing data with matplotlib, using a machine
              learning model to estimate its value with Tensorflow, the same
              estimation with different libraries, Keras, and performing our
              project on a web application with Flask and streamlit. I am
              interested in following fields; Machine Learning, Data Science,
              Web Application, Cybersecurity & information security,
              Automation.
            </Box>
          </Box>
        </Box>
        <Box className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'start',
            width: '100%',
            borderRadius: '2xl',
            backgroundColor: 'stone-300',
            '@media (max-width: 767px)': {
              marginTop: '10px',
              maxWidth: '100%'
            }
          }}>
            <Image src={profile} alt="Profile Photo"/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
