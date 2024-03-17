import React from 'react';
// import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AWSIcon from 'react-aws-icons/dist/aws/logo/AWS';

import { Box } from '@mui/material';


// const useStyles = makeStyles((theme) => ({
//     marquee: {
//       width: '80vw',
//       height: '20vh',
//       backgroundColor: '#111',
//       color: '#eee',
//       overflow: 'hidden',
//       position: 'relative',
//     },
//     marqueeContent: {
//     listStyle: 'none',
//       height: '100%',
//       display: 'flex',
//       animation: '$scrolling calc(var(--marquee-elements) * 3s) linear infinite',
//     },
//     '@keyframes scrolling': {
//       '0%': { transform: 'translateX(0)' },
//       '100%': { transform: 'translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)))' },
//     },
//     listItem: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexShrink: 0,
//       width: 'calc(var(--marquee-width) / var(--marquee-elements-displayed))',
//       maxHeight: '100%',
//       fontSize: 'calc(var(--marquee-height)*3/4)',
//       whiteSpace: 'nowrap',
//     },
//   }));
  
  const AWSIconCarousel = () => {
    // const classes = useStyles();
  
    return (
      <Box>
        <List>
            <AWSIcon />
         
        </List>
      </Box>
    );
  };
  
  export default AWSIconCarousel;