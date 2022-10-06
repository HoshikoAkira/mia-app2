import * as React from 'react';


import { Box } from '@mui/system';

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';





export default function VediSondaggio() {

    
    const [sondaggio,setSondaggio ]= useState([]); 
    const {id}=useParams();

    // const [idSondaggio,setidSondaggio]=useState(""); 
    const [titolo,setTitolo ]= useState(""); 
    const [sottotitolo,setSottotitolo ]= useState(""); 
    // const [descrizione,setDescrizione ]= useState(""); 
    // const [dataInizio,setDataInizio ]= useState(""); 
    // const [dataFine,setDataFine]= useState(""); 
    // const [email,setEmail]= useState(""); 
  

   
   
    useEffect(() => {
        // console.log('=====>'+ id);
        fetchSondaggio(id)//Id dal fetch del sondaggio
        
    },[])

    const fetchSondaggio =(id)=>{
        console.log("http://localhost:3000/api/getSondaggioById/"+id)
        //fetch per prender sondaggio
        fetch("http://localhost:3000/api/getSondaggioById/"+id).then(function (response) {
            return response.json();
        }).then(function (json) {
            
            // console.log(json)
           
            

               let json_ridotto = 
                {
                    // _id: json.idSondaggio,
                    titolo: json.titolo,
                    sottotitolo: json.sottotitolo,
                    // descrizione: json.descrizione,
                    // data_inizio: json.dataInizio,
                    // data_fine: json.dataFine,
                    // email: json.emailCreatore
                  
                }
                // setidSondaggio(json._id),
                setTitolo(json.titolo)
                setSottotitolo(json.sottotitolo),
                // setDescrizione(json.descrizione),
                // setDataInizio(json.dataInizio),
                // setDataFine(json.dataFine),
                // setEmail(json.emailCreatore)
                
            
            console.log(json_ridotto)
            setSondaggio([json_ridotto]);
        
        }).catch(function (err) {
            console.log("fetch" + err.message);
        
        })
        };

    return (
         <Box sx={{ height: 400, width: '100%' }}>
         
            <TextField value={titolo} onChange={(e) => {
                setTitolo(e.target.value)
            }} />
          <TextField id="outlined-basic" label="Sottotitolo" variant="outlined" 
         value={sottotitolo} onChange={(e)=>{
      
              setSottotitolo(e.target.value)
         }
        }
         />

            <Button variant="text" onClick={() => {
                console.log(titolo);
            }}>Save</Button>
        </Box>

    );
}
