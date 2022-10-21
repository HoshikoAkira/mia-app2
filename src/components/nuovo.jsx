import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
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
    stato: "bozza"
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
    fetch("http://localhost:3000/API/postSondaggio1", {
      method: "POST", headers: { 'Content-Type': 'application/json' },
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
        //il DB risponde con un json (il sondaggio appena trovato)
        return response.json()
      })
      .then(function (json) {
        //prendo l'ID del sondaggio da questo json
        let idNuovoSondaggio = json._id
        console.log(idNuovoSondaggio)
        return idNuovoSondaggio
      })
      //Funzione a cui navigare
      .then((idNuovoSondaggio) =>
        //passo questo ID alla pagina successiva
        navigate("/inserisciDomande/" + idNuovoSondaggio)
      )
      .catch(function (err) {
        console.log("errore fetch: " + err.message);
      })

  };

  return (

    <Box
      sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' } }}
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

        {/* METTERE IL DATE PICKER PER INTERO COME IN VEDISONDAGGIO */}
        <div>
          <ResponsiveDatePickers />
        </div>

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

        {/* Selettore dello stato */}
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Stato</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="simple-select"
                name="stato"
                label="Stato"
                defaultValue={"bozza"}
                onChange={cambiaStato}
              >
                <MenuItem value={"aperto"}>Aperto</MenuItem>
                <MenuItem value={"chiuso"}>Concluso</MenuItem>
                <MenuItem value={"bozza"}>Bozza</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            type='submit'
            variant="outlined"
            size="medium"
            sx={{  marginTop: "20px" ,float:"right" }}
          >
            Continua
          </Button>

        </div>
      </form>
    </Box>
  );
}
