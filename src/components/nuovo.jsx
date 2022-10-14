import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import BasicSelect from './BasicSelect';
import { Button } from "@mui/material";
import ResponsiveDatePickers from "./Date"
import { useNavigate } from 'react-router-dom';

export default function Nuovo() {

  const navigate = useNavigate();

  const [dati, setDati] = useState({
    titolo: "",
    sottotitolo: "",
    descrizione: "",
    dataInizio: new Date(),
    dataFine: new Date(),
    emailCreatore: "",
    stato: "",
  });

  const cambiaTitolo = (e) => {
    setDati((params) => {
      return {
        ...params,
        titolo: e.target.value,
      }
    })
  };
  const cambiaSottotitolo = (e) => {
    setDati((params) => {
      return {
        ...params,
        sottotitolo: e.target.value,
      }
    })
  };
  const cambiaDescrizione = (e) => {
    setDati((params) => {
      return {
        ...params,
        descrizione: e.target.value,
      }
    })
  };
  const cambiaDataInizio = (e) => {
    setDati((params) => {
      return {
        ...params,
        dataInizio: e.target.value,
      }
    })
  };
  const cambiaDataFine = (e) => {
    setDati((params) => {
      return {
        ...params,
        dataFine: e.target.value,
      }
    })
  };
  const cambiaEmailCreatore = (e) => {
    setDati((params) => {
      return {
        ...params,
        emailCreatore: e.target.value,
      }
    })
  };
  const cambiaStato = (e) => {
    setDati((params) => {
      console.log(e)
      return {
        ...params,
        stato: e.target.value,
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(dati);


    //Fetch che passa i parametri da passare al db
    fetch("http://localhost:3000/API/postSondaggio1", { method: "POST", headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
        "titolo": dati.titolo,
        "sottotitolo": dati.sottotitolo,
        "descrizione": dati.descrizione,
        "dataInizio": dati.dataInizio,
        "dataFine": dati.dataFine,
        "emailCreatore": dati.emailCreatore,
        "stato": dati.stato
      })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      })
      .then(navigate("/inserisciDomande")) //Funzione a cui navigare
      .catch(function (err) {
        console.log("errore fetch: " + err.message);
      })

  };

  return (

    <Box
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

      <form onSubmit={handleSubmit}>
        <div>

          <TextField
            id="campo-titolo"
            name='titolo'
            value={dati.titolo}
            label="Titolo"
            multiline
            maxRows={4}
            variant="outlined"
            type={"text"}
            onChange={cambiaTitolo}

          />

          <TextField
            id="campo-sottotitolo"
            name='sottotitolo'
            value={dati.sottotitolo}
            label="Sottotitolo"
            multiline
            maxRows={4}
            variant="outlined"
            onChange={cambiaSottotitolo}
          />
        </div>

        <div>
          <TextField
            id="campo-descrizione"
            name='descrizione'
            value={dati.descrizione}
            label="Descrizione"
            multiline
            maxRows={4}
            variant="outlined"
            onChange={cambiaDescrizione}
          />
        </div>


        <div>
          <ResponsiveDatePickers />
        </div>

        {/* <div>
          <TextField
            id='campo-data-inizio'
            name='dataInizio'
            value={dati.dataInizio}
            label="Data Inizio"
            variant="outlined"
            onChange={cambiaDataInizio}
          />

          <TextField
            id='campo-data-fine'
            name='dataFine'
            value={dati.dataFine}
            label="Data Fine"
            variant="outlined"
            onChange={cambiaDataFine}
          />

        </div> */}

        <TextField
          id="campo-email-creatore"
          name='emailCreatore'
          value={dati.emailCreatore}
          label="Email"
          multiline
          maxRows={4}
          variant="outlined"
          onChange={cambiaEmailCreatore}
        />


        <div>
          <BasicSelect
            id="campo-stato"
            // valore={stato}
            name="stato"
            // value={"aperto"}
            onChange={cambiaStato}

          />

          <Button
            type='submit'
            variant="outlined"
            size="medium"
            sx={{ marginRight: "20px", marginTop: "20px", marginLeft: "10px" }}
          >
            Continua
          </Button>

        </div>
      </form>

    </Box>
  );
}
