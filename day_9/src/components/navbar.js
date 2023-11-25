import {
  Routes,
  Route,
  BrowserRouter as Router,
  Link,
} from 'react-router-dom'
import { AppBar, Toolbar, Box, Typography } from '@mui/material'
import Home from './home'
import Singer from './singer'
import Album from './album'

export default function Navbar() {
  return (
    <Router>
      <AppBar sx={{ width: '100vw', marginButtom: '20rem' }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 2 }}
          >
            MusicWorld
          </Typography>
          <Link style={{ marginLeft: '10px', textDecoration: 'none' }} to="/">
            <Typography variant="h6" color={'white'}>
              Home
            </Typography>
          </Link>
          <Link
            style={{ marginLeft: '10px', textDecoration: 'none' }}
            to="/singer"
          >
            <Typography variant="h6" color={'white'}>
              Singer
            </Typography>
          </Link>
          <Link
            style={{ marginLeft: '10px', textDecoration: 'none' }}
            to="/album"
          >
            <Typography variant="h6" color={'white'}>
              Album
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singer" element={<Singer />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </Router>
  )
}
