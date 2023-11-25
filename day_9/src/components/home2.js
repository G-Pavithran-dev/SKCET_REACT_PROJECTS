import { Box, Typography } from '@mui/material'

export default function Home2() {
  return (
    <Box
      sx={{ width: '100vw', height: '91vh' }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography variant="h3">Welcome to</Typography>
      <Typography variant="h1">Mulit Page React Application</Typography>
    </Box>
  )
}
