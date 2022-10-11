import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import BasicSelect from './BasicSelect';
import {Button} from "@mui/material"
import { useForm } from "react-hook-form";
import { Form, useNavigate } from 'react-router-dom';

export default function Nuovo () {

  const [idSondaggio,setidSondaggio]=useState(""); 
  const [titolo, setTitolo] = useState("");
  const [sottotitolo, setSottotitolo] = useState("");
  const [descrizione,setDescrizione ]= useState(""); 
  const [dataInizio,setDataInizio ]= useState(""); 
  const [dataFine,setDataFine]= useState(""); 
  const [email,setEmail]= useState(""); 

  // const { register, handleSubmit } = useForm();
  // const navigate= useNavigate();
  
  
  // const AddDati = (data) => {
  //    let formData = new FormData();
  //   formData.append("Titolo", data.titolo);









//   fetch("http://localhost:3000/api/postSondaggio1", {method: "POST", body: formData}).then(function (response) {
//       return response.json();
//   }).then(data => navigate("/sondaggi/")) //Funzione a cui navigare





//   .catch(function (err) {
//     console.log("fetch" + err.message);
    

// });

  return (


    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      {/* <Form className="openticket-background" onSubmit={handleSubmit(AddDati)}>  */}
      
      <div>
    
      <TextField 
          id="filled-multiline-flexible"
          label="Titolo"
          multiline
          maxRows={4}
          variant="outlined"
          type="text"
          // {...register("Titolo", {

          //   required: true

          // })}
        />
      
      <TextField 
          id="filled-multiline-flexible"
          label="Sottotitolo"
          multiline
          maxRows={4}
          variant="outlined"
        />
      </div>

       <div>
       <TextField
          id="filled-multiline-flexible"
          label="Descrizione"
          multiline
          maxRows={4}
          variant="outlined"
        />
       </div>
    
      <div>
      <TextField label="Data Inizio" variant="outlined" />

      <TextField label="Data Fine" variant="outlined" />

      </div>

      <TextField 
          id="filled-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          variant="outlined"
        />


      <div>
        <BasicSelect/>

      </div>
      <div>
        <Button variant="outlined" size="medium" sx={{ marginRight: "20px", marginTop: "20px",marginLeft:"10px" }} onClick={() => {
        }}>
          Continua
        </Button>
      </div>

{/* </Form> */}

    </Box>
  );
      }
