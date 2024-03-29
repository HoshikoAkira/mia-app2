import React from "react";

import { ThemeProvider } from "@emotion/react";
import theme from "./components/temaConfig"

import TabPanel from "./Tabs/tabs"
import ButtonAppBar from "./components/navbar"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TabDomande from "./Tabs/TabDomande"
import HomePage from "./components/HomePage"
import TabSondaggio from "./Tabs/TabSondaggio"
import TabNuovo from "./Tabs/TabNuovo"
import TabNuovaDomanda from "./Tabs/TabNuovaDomanda"
import TabModificaDomanda from "./Tabs/tabModificaDomanda"
// import Checkboxes from "./components/CheckBox"
// import RadioButtonsGroup from "./components/RadioButton"
// import BasicTextFields from "./components/RispostaLibera"



function App() {

  return (
    < >
 
    {/* //Collego gli elementi tramite id  */}
      <BrowserRouter>
        <Routes>

        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/sondaggi" element={<TabPanel/>} />
        <Route exact path="/domande/:id" element={<TabDomande/>} />
        <Route exact path="/VediSondaggio/:id" element={<TabSondaggio/>} /> 
        <Route exact path="/Nuovo" element={<TabNuovo/>} /> 
        <Route exact path="/InserisciDomande/:id" element={<TabNuovaDomanda/>} />
        <Route exact path="/ModificaDomanda/:id" element={<TabModificaDomanda/>} />

        
        
        
        
        </Routes> 
      </BrowserRouter> 
      <br></br>

    {/* <Checkboxes/>
    <RadioButtonsGroup/>

    <BasicTextFields/> */}

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