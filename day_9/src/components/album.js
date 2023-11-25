import {Box, Typography,Grid,Card,CardContent} from '@mui/material'


export default function Album() {
    const singers = [
      {
        singer: 'Anirudh Ravichander',
        albums: [
          {
            albumName: 'Nanum Rowdy Dhaan',
            releaseYear: 2014,
          },
          {
            albumName: 'Velai Illa Pattadhari',
            releaseYear: 2014,
          },
          {
            albumName: 'Kaththi',
            releaseYear: 2014,
          },
          {
            albumName: 'Ethir Neechal',
            releaseYear: 2015,
          },
          {
            albumName: 'Puli',
            releaseYear: 2015,
          },
        ],
      },
      {
        singer: 'Yuvan Shankar Raja',
        albums: [
          {
            albumName: 'Manmadhan',
            releaseYear: 2004,
          },
          {
            albumName: 'Kaadhal Kondein',
            releaseYear: 2004,
          },
          {
            albumName: 'Gilli',
            releaseYear: 2004,
          },
          {
            albumName: 'Anjaan',
            releaseYear: 2014,
          },
          {
            albumName: 'I',
            releaseYear: 2015,
          },
        ],
      },
      {
        singer: 'Harris Jayaraj',
        albums: [
          {
            albumName: 'Minnalae',
            releaseYear: 2001,
          },
          {
            albumName: 'Kaakha Kaakha',
            releaseYear: 2003,
          },
          {
            albumName: 'Bheema',
            releaseYear: 2004,
          },
          {
            albumName: 'Vaaranam Aaayiram',
            releaseYear: 2008,
          },
          {
            albumName: 'Aadukalam',
            releaseYear: 2011,
          },
        ],
      }
    ]

    return (
      <Box marginTop={'90px'}>
        <Typography variant="h3">List of Albums per singer</Typography>
        <Grid container spacing={2}>
          {singers.map((data, index) => (
            <Grid
              item
              key={index}
              sx={{ width: '100%' }}
            >
                  <h1 style={{color:'red'}}>Singer : {data.singer}</h1>
                  <Grid container spacing={2}>
                    {data.albums.map((data, index) => (
                        <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        xl={6}
                        key={index}
                        sx={{ width: '100%' }}
                        >
                        <Card sx={{ border: '1px solid red', height: '150px' }}>
                            <CardContent>
                            <Typography variant="h4">Album : {data.albumName}</Typography>
                            <Typography variant="h5">Year : {data.releaseYear}</Typography>
                            </CardContent>
                        </Card>
                        </Grid>
                    ))}
                  </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}
