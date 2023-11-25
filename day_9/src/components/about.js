import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const About = () => {
    return (
      <Box
        sx={{ width: '100vw', height: '91vh' }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to our website!
        </Typography>
      </Box>
    )
};

export default About;
