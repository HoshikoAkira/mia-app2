import React from "react";
import Button from "@mui/material/Button";
import Tattoli from "./components/button";
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIconsSize from "./components/home";
import IconButton from '@mui/material/IconButton'
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography'

import Navbar from "./components/navbar"
import { ThemeProvider } from "@emotion/react";
import theme from "./components/temaConfig"
import Lista from "./components/lista"
import TabPanel from "./components/tabs"
import ButtonAppBar from "./components/navbar2"
  






function App() {

  return (
    <div >
  
      <br></br> 


      <ThemeProvider theme={theme}>
        <ButtonAppBar />
        <br></br><br></br>
        {/* <Button color="secondary" variant="contained" href="http://google.com" fullWidth>Google</Button> */}
        {/* <Typography variant="h1" color="#00ffd8" align="center">Ciao</Typography> */}

        {/* <Lista/> */}

      </ThemeProvider >

      {/* <Tattoli /> */}

      <TabPanel />


      {/* <Button color="success" variant="outlined"  >Ciao </Button> */}
      
      <br></br>


    </div>
  );
}

export default App;
