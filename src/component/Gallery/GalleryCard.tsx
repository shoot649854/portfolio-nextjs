import React from 'react';
import {
    Box,
    Paper,
    Typography, 
    Link, 
    useMediaQuery
} from '@mui/material'
import { PostMeta } from '@/Type';
import { useIsSmallScreen } from '../GlobalLayout/GlobalMedia';
type Props = {
    data: PostMeta;
  };

  
const GalleryCard = ({ data }: Props) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Paper sx={{
      mx: '10%', // auto
      mb: 3,
      bgcolor: 'white',
      position: 'relative',
      boxShadow: 'xl',
      transition: 'box-shadow 0.5s',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      '&:hover': {
        boxShadow: '2xl',
      },
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        '&:nth-of-type(even)': {
          flexDirection: 'row-reverse',
        },
      },
    }}>

        <Box sx={{
          flexGrow: 0,
          width: '80%',
          pt: 2,
          pb: 2,
          px: 2,
          '@media (min-width: 768px)': {
            width: '45%',
          },
        }}>
          
          <Link href={`/post/${data.slug}`} color="inherit" style={{textDecoration: "none"}}>
          <Typography variant="body1">{data.category}</Typography>
          <Typography 
            variant="h3" 
            component="h3" 
            sx={{ 
              my: isSmallScreen ? 1 : 4, 
              fontSize: isSmallScreen ? '21px' : 'inherit',
              }}>
              {data.title}
          </Typography>
          <Typography variant="body2" >{data.date}</Typography>
          <Typography variant="body2" sx={{ mb: isSmallScreen ? 0.5 : 2, height: 'auto',  overflow: 'hidden'}}>{data.description}</Typography>
          </Link>
        </Box>
      <Box sx={{
        flexGrow: 0,
        overflow: "hidden",
        height: isSmallScreen ? 'auto' : '100%',
        width: isSmallScreen ? '100%' : '55%',
      }}>
        <img src={data.coverImage} alt={data.title} />
      </Box>
    </Paper>
  );
};

  
export default GalleryCard;
