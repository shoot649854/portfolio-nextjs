import React from 'react';
import {
    Box,
    Paper,
    Typography, 
    Link
} from '@mui/material'
import { PostMeta } from '@/Type';

type Props = {
    data: PostMeta;
  };

  
const AppCard = ({ data }: Props) => {
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
        <Typography variant="body1">{data.category}</Typography>
        <Typography variant="h3" component="h3" sx={{ my: 4 }}>
          <Link href={`/post/${data.slug}`} color="inherit" style={{textDecoration: "none"}}>{data.title}</Link>
        </Typography>
        <Typography variant="body2" >{data.date}</Typography>
        <Typography variant="body2" sx={{ mb: 2, height: '24px' /**, overflow: 'hidden'  */}}>{data.description}</Typography>
      </Box>
      <Box sx={{
        flexGrow: 0,
        overflow: "hidden",
        width: '100%',
        height: '4px',
        '@media (min-width: 768px)': {
          height: '100%',
          width: '55%',
        },
      }}>
        <img src={data.coverImage} alt={data.title} />
      </Box>
    </Paper>
  );
};

  
export default AppCard;
