import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
       
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 0 }}>
          <Button color="inherit" href="/">HOME</Button>
          </Typography>
          <Button color="inherit" href="/sondaggi">Sondaggi</Button>
          <Button color="inherit" href='/nuovo'>Nuovo</Button>
          <Button color="inherit" href='/analitycs'>Analitycs</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
