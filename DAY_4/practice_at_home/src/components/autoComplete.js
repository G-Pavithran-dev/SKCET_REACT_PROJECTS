import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material'

const LoginButton = () => {
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Username:', username)
    console.log('Password:', password)

    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        data-testid="login"
      >
        Login
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-testid="username"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleLogin} data-testid="dia-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LoginButton
