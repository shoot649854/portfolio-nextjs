import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import resumeData from "@/../../resume.json";
import Image from "next/image";
import profile from '@/../public/profile.jpeg';

const createBoxes = (): JSX.Element[] => {
  const boxes: JSX.Element[] = [];
  for (let i = 0; i < 30; i++) {
    boxes.push(
      <Box
        key={i}
        className="w-[3px] h-24 relative bg-white"
        style={{ transform: "rotate(90deg)" }}
      />
    );
  }
  return boxes;
};

const GraduationLine: React.FC = () => {
  return (
    
      <Box
        style={{
          height: "2534px",
          flex: "1",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingTop: "139px",
          paddingRight: "0",
          paddingBottom: "52px",
          paddingLeft: "0",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Box
          style={{
            height: "calc(100% - 2438px)",
            width: "calc(100% + 2438px)",
            position: "absolute",
            margin: "0",
            top: "0px",
            right: "-2534px",
            bottom: "2438px",
            left: "96px",
          }}
        >
          <Box
            style={{
              background: "linear-gradient(90deg, #8ed7ee, #00aab5)",
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
            }}
          />
        </Box>
        <Box>{createBoxes()}</Box>
      </Box>
  );
};

interface TimelineItemProps {
  title: string;
  year: string;
  description: string;
}

function TimelineItem(props: TimelineItemProps) {
  const { title, year, description } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <Box
    width={'100%'}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "start",
        paddingY: 0,
        paddingX: { xs: "60px", md: "30px" },
        boxSizing: "border-box",
        transition: "1.5s", 
        transform: isHovered ? "translateY(-20px)" : "translateY(0)",
        "@media (min-width: 750px)": {
          paddingLeft: "30px",
          paddingRight: "30px",
          flexDirection: 'column',
          '&:nth-of-type(even)': {
            flexDirection: 'column',
          },
        },
        
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <Box
        sx={{
          position: 'absolute',
          left: '0%',
          top: 0,
          bottom: 0,
          width: '5px',
          backgroundColor: isHovered ? '#101010' : '#B0B0B0', // Change line color based on hover state
          transform: 'translateX(-50%)', // Center the line horizontally
        }}
      />
      <Box marginLeft={10}>

        <Typography
          component="b"
          variant="body1"
          sx={{
            fontWeight: "bold",
            position: "relative",
            "@media (min-width: 450px)": {
              fontSize: "lg",
            },
            "@media (min-width: 1050px)": {
              fontSize: "7xl",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            position: "relative",
            fontWeight: "medium",
            color: "silver",
            "@media (min-width: 450px)": {
              fontSize: "lg",
            },
            "@media (min-width: 1050px)": {
              fontSize: "7xl",
            },
          }}
        >
          {year}
        </Typography>
      
        <Typography
          width={'50%'}
          variant="body1"
          sx={{
            position: "relative",
            fontWeight: "medium",
            color: "black",
            "@media (min-width: 450px)": {
              fontSize: "lg",
            },
            "@media (min-width: 1050px)": {
              fontSize: "7xl",
            },
            opacity: isHovered ? 1 : 0, // Set initial opacity based on hover state
            transition: "opacity 0.5s ease-in-out", // Apply transition to opacity property
          }}
        >
        {description}
        </Typography>
      </Box>
      
    </Box>
  );
}

const Frame: NextPage = () => {
  const projects = resumeData.Projects.map((obj) => obj ?? null);

  return (
    <Box className="w-full relative bg-white flex flex-col items-center justify-start py-10 px-5 box-border gap-[157px] tracking-[normal] z-[unset] text-left text-53xl text-gray font-raleway lg:gap-[78px_157px] mq450:gap-[20px_157px] mq750:gap-[39px_157px]">
      <Box className="mt-28 w-full max-w-[1474px] max-md:mt-10 max-md:max-w-full">
        <Box className="flex gap-5 max-md:flex-col max-md:gap-0">
          <Box className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <Box className="flex flex-col grow pb-2 mt-12 max-md:mt-10 max-md:max-w-full">
              <Box className="text-7xl font-extrabold text-zinc-950 max-md:max-w-full max-md:text-4xl">
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
      
      <Box sx={{
        width: '1474px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'start',
        justifyContent: 'center',
        gap: '6px',
        maxWidth: '100%',
        textAlign: 'left',
        fontSize: '13xl', 
        color: 'black',
        fontFamily: 'placeholder'
      }}>

        <Box 
        sx={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
          paddingTop: '181px',
          paddingRight: '0',
          paddingBottom: '181px',
          paddingLeft: '0',
          boxSizing: 'border-box',
          gap: '255px',
          minWidth: '444px',
          maxWidth: '100%',
          '@media (min-width: 450px)': {
            gap: '64px 255px'
          },
          '@media (min-width: 750px)': {
            gap: '127px 255px',
            paddingTop: '50px',
            paddingBottom: '50px'
          }
        }}>
          {projects.map((project: TimelineItemProps, index: number) => (
            <TimelineItem
              key={index}
              title={project.title}
              year={project.year}
              description={project.description}
            />
          ))}
        </Box>
      </Box>
        {/*  */}
        {/* <GraduationLine /> */}

        
      {/* </main> */}
    </Box>
  );
};

export default Frame;
