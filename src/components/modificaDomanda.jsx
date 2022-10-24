import * as React from 'react';


import { Box } from '@mui/system';

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';





export default function ModificaDomanda() {

  const navigate = useNavigate();
  const [domanda, setDomanda] = useState([]);
  const { id } = useParams();

  const [idDomanda, setidDomanda] = useState("");
  const [testo, setTesto] = useState("");
  const [tipologia, setTipologia] = useState("");
  const [indice, setIndice] = useState("");


  useEffect(() => {
    // console.log('=====>'+ id);
    fetchDomanda(id)//Id dal fetch della domanda

  }, [])

  const fetchDomanda = (id) => {


    fetch("http://localhost:3000/api/getDomandaById/" + id).then(function (response) {
      return response.json();
    }).then(function (json) {

      console.log("JSON RICEVUTO: ", json)

      let json_ridotto =
      {
        _id: json._id,
        testo: json.testo,
        tipologia: json.tipologia,
        indice: json.indice,


      }
      setidDomanda(json_ridotto._id)
      setTesto(json_ridotto.testo)
      setTipologia(json_ridotto.tipologia)
      setIndice(json_ridotto.indice)


      console.log("JSON RIDOTTO: ", json_ridotto)
      setDomanda([json_ridotto]);

    }).catch(function (err) {
      console.log("fetch" + err.message);

    })
  };

  const SubmitAggiorna = (e) => {
    e.preventDefault();


    //Fetch che passa i parametri aggiornati al db
    fetch("http://localhost:3000/API/updateDomandaById/" + id, {
      method: "PATCH", headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "testo": testo,
        "tipologia": tipologia,
        "indice": indice,

      })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      })
      .then(navigate(-1))//Funzione a cui navigare
      .catch(function (err) {
        console.log("errore fetch: " + err.message);
      })

  };


  return (

    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >

      {/* -------------Parametri del form---------------- */}
      <form onSubmit={SubmitAggiorna}>

        <div>
          <TextField label="Testo" variant="outlined"
            name='testo'
            value={testo} onChange={(e) => {
              setTesto(e.target.value)
            }} />

          {/* <TextField label="Tipologia" variant="outlined"
                        value={tipologia} onChange={(e) => {
                            setTipologia(e.target.value)
                        }} /> */}
        </div>

        <TextField label="Indice" variant="outlined"
          name='indice'
          value={indice} onChange={(e) => {
            setIndice(e.target.value)
          }}
        />
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Tipologia</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="simple-select"
              name="tipologia"
              label="Tipologia"
              value={tipologia}
              defaultValue={"CheckBox"}
              onChange={(e) => {
                setTipologia(e.target.value)
              }}
            >
              <MenuItem value={"CheckBox"}>CheckBox</MenuItem>
              <MenuItem value={"Radio Button"}>Radio Button</MenuItem>
              <MenuItem value={"Risposta Libera"}>Risposta Libera</MenuItem>
            </Select>
          </FormControl>

        </div>





        {/*-------------  Bottone aggiorna ed elimina------------- */}
        <div>

          <Button
            type='submit'
            variant="outlined"
            size="medium"
            sx={{ marginRight: "20px", marginTop: "20px", marginLeft: "10px" }}
          >
            Aggiorna
          </Button>



        </div>
        {/* ---------------------Fine bottoni ----------- */}

      </form>
    </Box>




  );
}

