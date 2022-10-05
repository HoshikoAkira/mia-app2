import React from 'react'
import ButtonAppBar from './navbar'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { margin } from '@mui/system';



const HomePage = () => {
    return (
        <>

            <ButtonAppBar />

            <React.Fragment>
                <CssBaseline />

                <Container maxWidth="xl">
                
                    <Box sx={{ bgcolor: '#eaf5fc', height: '80vh', marginTop: '80px' }} >
                        
                     <p style={{marginLeft:"20px",paddingTop:"20px"}}>Descrizione</p>
                     


                    </Box>
                </Container>
            </React.Fragment>
        </>

    )
}

export default HomePage

