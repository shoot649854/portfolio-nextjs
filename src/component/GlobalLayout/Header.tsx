'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

import { 
  Avatar,
  Box,
  Button,
  Toolbar,
  IconButton,
  useMediaQuery,
  Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BlogIcon from '@mui/icons-material/Description';
import ProjectIcon from '@mui/icons-material/Work';
import profile from '@/../public/profile.jpeg'

function Header() {
  const router = useRouter();
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  
  return (
    <React.Fragment>
      <Box marginBottom='20px' sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
            
          <Toolbar component="nav" variant="dense">
            <Button
              variant="text"
              startIcon={<HomeIcon />}
              onClick={() => router.push('/')}
              sx={{ textTransform: 'none', marginRight: '10%', fontSize: isSmallScreen ? '0.5rem' : 'inherit' }}
            >
              {!isSmallScreen && (
                <Typography>
                  Home
                </Typography>
              )}
            </Button>
            <Button
              variant="text"
              startIcon={<BlogIcon />}
              onClick={() => router.push('/post')}
              sx={{ textTransform: 'none', marginRight: '10%', fontSize: isSmallScreen ? '0.5rem' : 'inherit' }}
            >
              {!isSmallScreen && (
                <Typography>
                  Blog
                </Typography>
              )}
            </Button>
            <Button
              variant="text"
              startIcon={<ProjectIcon />}
              onClick={() => router.push('/projects')}
              sx={{ textTransform: 'none', marginRight: '10%', fontSize: isSmallScreen ? '0.5rem' : 'inherit' }}
            >
              {!isSmallScreen && (
                <Typography>
                    Projects
                </Typography>
              )}
            </Button>
          </Toolbar>
        </Box>
        {!isSmallScreen && (
          <Box marginTop={'0.5%'}>
            <Avatar alt="Profile Photo" sx={{ width: 36, height: 36 }}> 
              <Image src={profile} alt="Profile Photo" fill sizes="(max-width: 600px) 36px, 72px"/>
            </Avatar>
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
}

export default Header;
