import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Button, createTheme} from '@mui/material'


const UseStyle= createTheme(theme=>({
offset : theme.mixins.toolbar
}))


const navbar = () => {
  const classes = UseStyle()
  return (
    <div>
        <AppBar position="fixed" color="primary" sx={{height:50}}>
          <Toolbar>
            <Typography variant="h8" >
     
            </Typography>
            <Button variant="text" color="inherit">
              Home
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
        </div>
  )
}

export default navbar