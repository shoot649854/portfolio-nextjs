import React from 'react';
import { Typography, Box, Link, Paper } from '@mui/material';

type PostData = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

type ResultPostProps = {
  data: PostData;
  isSmallScreen: boolean;
};

const ResultPost: React.FC<ResultPostProps> = ({ data, isSmallScreen }) => {
  return (
    <Box width={'100%'}  className='component' sx={{ overflowY: 'scroll' }}>
      <Paper
        sx={{
          mx: 'auto', // auto
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
          },
        }}
      >
        <Box
          sx={{
            flexGrow: 0,
            width: '80%',
            pt: 2,
            pb: 2,
            paddingLeft: '5%',
            '@media (min-width: 768px)': {
              width: '90%',
            },
          }}
        >
          <Link href={`/post/${data.slug}`} color="inherit" style={{ textDecoration: "none" }}>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                my: isSmallScreen ? 1 : 1,
                fontSize: isSmallScreen ? '21px' : 'inherit',
              }}>
              {data.title}
            </Typography>
            <Typography variant="body2">{data.date}</Typography>
            <Typography variant="body2" sx={{ mb: isSmallScreen ? 0.5 : 2, height: 'auto', overflow: 'hidden' }}>{data.description}</Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default ResultPost;
