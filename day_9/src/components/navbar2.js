import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { AppBar, Toolbar, Box, Typography } from '@mui/material'
// import Home from './home'
import Home2 from './home2'
import About from './about'
import Contact from './contactus'

export default function Navbar() {
  return (
    <Router>
      <AppBar sx={{ width: '100vw', marginButtom: '20rem' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 2 }}>
            ReactApp
          </Typography>
          <Link style={{ marginLeft: '10px', textDecoration: 'none' }} to="/">
            <Typography variant="h6" color={'white'}>
              Home
            </Typography>
          </Link>
          <Link
            style={{ marginLeft: '10px', textDecoration: 'none' }}
            to="/about"
          >
            <Typography variant="h6" color={'white'}>
              About
            </Typography>
          </Link>
          <Link
            style={{ marginLeft: '10px', textDecoration: 'none' }}
            to="/contactus"
          >
            <Typography variant="h6" color={'white'}>
              Contact us
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </Router>
  )
}
