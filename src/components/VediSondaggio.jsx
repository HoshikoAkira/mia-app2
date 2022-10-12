import * as React from 'react';


import { Box } from '@mui/system';

import { useState } from 'react';
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { Button,  TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BasicSelect from './BasicSelect';

import dayjs from 'dayjs';


export default function VediSondaggio() {

    const navigate= useNavigate();
    const [sondaggio, setSondaggio] = useState([]);
    const { id } = useParams();

    const [idSondaggio,setidSondaggio]=useState(""); 
    const [titolo, setTitolo] = useState("");
    const [sottotitolo, setSottotitolo] = useState("");
    const [descrizione,setDescrizione ]= useState(""); 
    const [dataInizio,setDataInizio ]= useState(""); 
    const [dataFine,setDataFine]= useState(""); 
    const [email,setEmail]= useState(""); 
    const [stato, setStato] = useState('');
   
  

    useEffect(() => {
        // console.log('=====>'+ id);
        fetchSondaggio(id)//Id dal fetch del sondaggio

    }, [])

    const fetchSondaggio = (id) => {
        // console.log("http://localhost:3000/api/getSondaggioById/" + id);
        //fetch per prender sondaggio
        fetch("http://localhost:3000/api/getSondaggioById/" + id).then(function (response) {
            return response.json();
        }).then(function (json) {

            console.log(json)

            let json_ridotto =
            {
                _id: json.idSondaggio,
                titolo: json.titolo,
                sottotitolo: json.sottotitolo,
                descrizione: json.descrizione,
                data_inizio: json.dataInizio,
                data_fine: json.dataFine,
                email: json.emailCreatore,
                stato:json.stato

            }
            setidSondaggio(json.id)
            setTitolo(json.titolo)
            setSottotitolo(json.sottotitolo)
            setDescrizione(json.descrizione)
            setDataInizio(json.dataInizio)
            setDataFine(json.dataFine)
            setEmail(json.emailCreatore)
            setStato(json.stato)

        
             console.log(json_ridotto)
            setSondaggio([json_ridotto]);

        }).catch(function (err) {
            console.log("fetch" + err.message);

        })
    };
    
    return (

        <Box   component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        
            {/* -------------Parametri del form---------------- */}


       <div>
            <TextField  label="Titolo" variant="outlined"
             value={titolo} onChange={(e) => {
                setTitolo(e.target.value)
            }} />

            <TextField label="Sottotitolo" variant="outlined"
                value={sottotitolo} onChange={(e) => {

                    setSottotitolo(e.target.value)
                }}
            /> </div>
           
             <TextField label="Descrizione" variant="outlined"
                value={descrizione} onChange={(e) => {

                    setDescrizione(e.target.value)
                }}
            /> <div>

  
             <TextField label="Data Inizio" variant="outlined"
                value={dataInizio} onChange={(e) => {

                    setDataInizio(e.target.value)
                }}
            /> 
             <TextField label="Data Fine" variant="outlined"
                value={dataFine}
                minDate={dayjs('2020-01-01')}
                maxDate={dayjs('2030-01-01')}
                
                inputFormat="DD/MM/YYYY"
                onChange={(e) => {
                    
                setDataFine(e.target.value)
                }}
            /> 
            </div>
             <TextField label="Email" variant="outlined" 
                value={email} onChange={(e) => {

                    setEmail(e.target.value)
                }}
            />
              {/* Prova basic select */}

            <div>
                <BasicSelect onChange={(e) => {
                  setStato(e.target.value)
                }

                } />

            </div>
            {/*-------------  Bottoni aggiorna ed elimina------------- */}
            <div>
                

            <Button variant="outlined"  size="medium" sx={{marginRight:"20px",marginTop:"20px"}} onClick={() => {
                // console.log(titolo);
            }}>Aggiorna

            </Button>
          

          <Button variant="outlined" size="medium" sx={{marginTop:"20px"}} onClick={ ()=>{
            navigate("/domande/" +id);
                
          }}
          >
                Vedi Domande
            </Button>
                
              
           </div> 
          {/* ---------------------Fine bottoni ----------- */}
   
     
        </Box>




    );
}
