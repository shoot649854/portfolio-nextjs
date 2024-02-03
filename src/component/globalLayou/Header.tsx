'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import Avatar from '@mui/material/Avatar';

import profile from '../../../profile/profile.jpeg'

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
            <Button variant="text" onClick={() => router.push('/portfolio/blog')}>blog</Button>
            <Button variant="text" onClick={() => router.push('/portfolio/project')}>Project</Button>
          </Toolbar>
        </Box>
        <Box marginTop={'0.5%'}>
          <Avatar alt="Profile Photo" src={profile.src} sx={{ width: 36, height: 36 }}/>
        </Box>
      </Box>

    </React.Fragment>
    
  );
}

export default Header;
