import * as React from 'react';


import { Box } from '@mui/system';

import { useState } from 'react';
import { useEffect } from 'react';
import { useActionData, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// const BottoneDomande = () => {
//     const navigate=useNavigate();
  
     
//     return (
       
//         <Button  variant="outlined"  size="medium" 
//             onClick={() => {
              
//                 //Al click il bottone mi rimanda alle domande
//                 navigate("/domande/633a999500d3dec8cd442b8e"  );
                
//             }}>

//             Vedi Domande
//              </Button>
    
//     );

//   };



export default function VediSondaggio() {

    const navigate=useNavigate();
    const [sondaggio, setSondaggio] = useState([]);
    const { id } = useParams();

    // const [idSondaggio,setidSondaggio]=useState(""); 
    const [titolo, setTitolo] = useState("");
    const [sottotitolo, setSottotitolo] = useState("");
    const [descrizione,setDescrizione ]= useState(""); 
    const [dataInizio,setDataInizio ]= useState(""); 
    const [dataFine,setDataFine]= useState(""); 
    const [email,setEmail]= useState(""); 




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
                // _id: json.idSondaggio,
                titolo: json.titolo,
                sottotitolo: json.sottotitolo,
                descrizione: json.descrizione,
                data_inizio: json.dataInizio,
                data_fine: json.dataFine,
                email: json.emailCreatore

            }
            // setidSondaggio(json._id),
            setTitolo(json.titolo)
            setSottotitolo(json.sottotitolo)
            setDescrizione(json.descrizione)
            setDataInizio(json.dataInizio)
            setDataFine(json.dataFine)
            setEmail(json.emailCreatore)

        
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
                value={dataFine} onChange={(e) => {

                    setDataFine(e.target.value)
                }}
            /> 
            </div>
             <TextField label="Email" variant="outlined" 
                value={email} onChange={(e) => {

                    setEmail(e.target.value)
                }}
            />
            {/* <div>
             
            <BottoneDomande />
            </div>  */}
            
             <div>
             
            <Button variant="outlined"  size="medium" onClick={() => {
                // console.log(titolo);
            }}>Aggiorna

            </Button>
             

          <Button variant="outlined" size="medium" onClick={()=>{navigate("/domande");
                
          }}
          >
                Vedi Domande
            </Button>

           </div>

        </Box>




    );
}
