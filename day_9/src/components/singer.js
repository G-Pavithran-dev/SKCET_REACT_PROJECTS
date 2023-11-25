import { Typography,Box,Grid,Card,CardContent } from "@mui/material"

export default function Singer() {
  const singers = [
    {
      singer: 'Anirudh Ravichander',
      year: 2008,
    },
    {
      singer: 'Yuvan Shankar Raja',
      year: 2004,
    },
    {
      singer: 'Harris Jayaraj',
      year: 2001,
    },
    {
      singer: 'G. V. Prakash',
      year: 2004,
    },
    {
      singer: 'Vijay Antony',
      year: 2009,
    },
    {
      singer: 'Pradeep Kumar',
      year: 2014,
    },
  ]
  return (
    <Box marginTop={'90px'}>
      <Typography variant="h3">List of Singer</Typography>
      <Grid container spacing={2}>
        {singers.map((data, index) => (
          <Grid item xs={4} md={2} lg={3} xl={3} key={index} sx={{width:'100%'}}>
            <Card sx={{ border: '1px solid blue',height:'150px' }}>
              <CardContent>
                <Typography variant="h4">Singer : {data.singer}</Typography>
                <Typography variant="h5">Year : {data.year}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
