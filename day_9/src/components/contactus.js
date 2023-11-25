import React from 'react';
import { Typography, Box } from '@mui/material';

const ContactUs = () => {
    return (
      <Box
        sx={{ width: '100vw', height: '91vh' }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center">
          Email: 727722euit126@skcet.ac.in
        </Typography>
        <Typography variant="body1" align="center">
          Phone: 8760000701
        </Typography>
      </Box>
    )
};

export default ContactUs;