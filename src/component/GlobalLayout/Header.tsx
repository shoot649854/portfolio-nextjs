'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { 
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
  styled
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BlogIcon from '@mui/icons-material/Description';
import ProjectIcon from '@mui/icons-material/Work';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useIsSmallScreen } from './GlobalMedia';
import profile from '@/../public/profile.jpeg';

interface CustomButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const StyledIconButton = styled(IconButton)({
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#eee',
    color: '#555',
  },
});

const StyledButton = styled(Button)({
  color: '#FFF',
  '&:hover': {
    color: '#555',
  },
});

const StyledAvatar = styled(Avatar)({
  '&:hover': {
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  },
});

function CustomButton({ icon, text, onClick }: CustomButtonProps) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <StyledButton
      variant="text"
      startIcon={icon}
      onClick={onClick}
      sx={{ textTransform: 'none', width: 'auto', fontSize: isSmallScreen ? '0.5rem' : 'inherit' }}
    >
      <Typography>{text}</Typography>
    </StyledButton>
  );
}


function Header() {
  const router = useRouter();
  const isSmallScreen = useIsSmallScreen();
  
  return (
    <Box 
      height='36px' 
      paddingY={3}
      marginBottom='20px' 
      alignItems={'center'}
      sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#000000'}}>
      <Box gap={isSmallScreen ? '0%' : '10%'} sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledIconButton>
          <SearchIcon />
        </StyledIconButton>
          
        <CustomButton
          icon={<HomeIcon />}
          text="Home"
          onClick={() => router.push('/')}
        />
        <CustomButton
          icon={<BlogIcon />}
          text="Blog"
          onClick={() => router.push('/post')}
        />
        <CustomButton
          icon={<ProjectIcon />}
          text="Projects"
          onClick={() => router.push('/projects')}
        />

        <CustomButton
          icon={<PersonSearchIcon/>}
          text="AboutMe"
          onClick={() => router.push('/about')}
        />

      {!isSmallScreen && (
        <Box marginTop={'1%'}>
          <StyledAvatar alt="Profile Photo" sx={{ width: 36, height: 36 }}> 
            <Image src={profile} alt="Profile Photo" fill sizes="(max-width: 600px) 36px, 72px"/>
          </StyledAvatar>
        </Box>
      )}
      </Box>
    </Box>
  );
}

export default Header;