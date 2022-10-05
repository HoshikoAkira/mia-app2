import React from "react";

import { ThemeProvider } from "@emotion/react";
import theme from "./components/temaConfig"

import TabPanel from "./components/tabs"
import ButtonAppBar from "./components/navbar"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TabDomande from "./components/TabDomande"
import HomePage from "./components/HomePage"
import TabSondaggio from "./components/TabSondaggio"





function App() {

  return (
    < >
 
    {/* //Collego gli elementi tramite id  */}
      <BrowserRouter>
        <Routes>

        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/sondaggi" element={<TabPanel/>} />
        <Route exact path="/domande/:id" element={<TabDomande/>} />
        <Route exact path="/vediSondaggio/:id" element={<TabSondaggio/>} /> 
        
        
        </Routes> 
      </BrowserRouter> 
      <br></br>


      <ThemeProvider theme={theme}>
        <ButtonAppBar />
      </ThemeProvider > 


      <br></br><br></br><br></br>
     

      
        {/* <Button color="secondary" variant="contained" href="http://google.com" fullWidth>Google</Button> */}
        {/* <Typography variant="h1" color="#00ffd8" align="center">Ciao</Typography> */}

      {/* <Button color="success" variant="outlined"  >Ciao </Button> */}
      

    </>
  );
}

export default App;