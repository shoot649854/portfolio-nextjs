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
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import profile from '@/../profile/profile.jpeg'

function Header() {
  const router = useRouter();
  
  return (
    <React.Fragment>
      <Box marginBottom='20px' sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
            
          <Toolbar component="nav" variant="dense">
            <Button variant="text" onClick={() => router.push('/post')}>blog</Button>
            <Button variant="text" onClick={() => router.push('/portfolio/project')}>Project</Button>
          </Toolbar>
        </Box>
        <Box marginTop={'0.5%'}>
          <Avatar alt="Profile Photo" sx={{ width: 36, height: 36 }}> 
            <Image src={profile} alt="Profile Photo" fill sizes="(max-width: 600px) 36px, 72px"/>
          </Avatar>
          
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Header;
