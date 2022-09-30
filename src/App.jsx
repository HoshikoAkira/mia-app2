import React from "react";

import { ThemeProvider } from "@emotion/react";
import theme from "./components/temaConfig"

import TabPanel from "./components/tabs"
import ButtonAppBar from "./components/navbar"
import DataGridDemo from "./components/domande"
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  return (
    < >
    {/* //Collego gli elementi tramite id  */}
    {/* //Collego gli elementi tramite id  */}
      <BrowserRouter>
        <Routes>
          <Route path="sondaggi/:id" element={<DataGridDemo />} />
        </Routes>
      </BrowserRouter> 
      <br></br>


      <ThemeProvider theme={theme}>
        <ButtonAppBar />
      </ThemeProvider >


      <br></br><br></br><br></br>
      <TabPanel />

      
        {/* <Button color="secondary" variant="contained" href="http://google.com" fullWidth>Google</Button> */}
        {/* <Typography variant="h1" color="#00ffd8" align="center">Ciao</Typography> */}

      {/* <Button color="success" variant="outlined"  >Ciao </Button> */}
      

    </>
  );
}

export default App;
