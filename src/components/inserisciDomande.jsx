import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Icon, IconButton } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';



export default function InserisciDomande() {

 
  //
  const { id } = useParams();

  //useState per la domanda
  const [domanda, setDomanda] = useState({
    testo: "",
    tipologia: "checkbox",
    indice: "",
    risposte: new Array()   //creo array vuoto(riempito con useState delle risposte)
  });
  //useState per l'array di risposte
  const [listaRisposte, setListaRisposte] = useState([{ risposta: '' }]);

  const TestoDomanda = (e) => {
    //console.log(e.target.value)
    setDomanda((params) => {
      return {
        ...params,
        testo: e.target.value,
      }
    })
  }

  const TipoDomanda = (e) => {
    setDomanda((params) => {
      //console.log(e.target.value)
      return {
        ...params,
        tipologia: e.target.value,
      }
    })
  }

  


  // const PrendiIndice = (e) => {
  //   setDomanda((params) => {
  //     return {
  //       ...params,
  //       indice: e.target.value,
  //     }
    // })
  // }

  //Aggiunge un oggetto "risposta" all'array listaRisposte ↑
  const aggiungiAlClick = () => {
    let nuovaRisposta = { risposta: "" };
    setListaRisposte([...listaRisposte, nuovaRisposta]);
  };

  //Aggiorna le singole risposte dell'array
  const AggiungiRisposte = (indice, e) => {
    let lista = [...listaRisposte];
    lista[indice][e.target.name] = e.target.value;
    setListaRisposte(lista);
  }

  const ClearRisposta = (indice) => {
    console.log("indice: ", indice)
    let lista = [...listaRisposte];
    lista[indice]["risposta"] = "";
    setListaRisposte(lista);
  }



  //fetch finale (di tipo PATCH) --prendere anche l'ID del sondaggio appena creato
  const handleSubmit = (e) => {
    e.preventDefault();
    domanda.risposte = listaRisposte; //aggiungo l'array delle risposte alla variabile di stato

    console.log(domanda);
    console.log("id del url: " + id);
    //=> da qui fare il fetch, l'API si chiama "http://localhost:3000/API/aggiungiDomandaCompleta/" +id
    fetch("http://localhost:3000/API/aggiungiDomandaCompleta/" +id, {
      method: "PATCH", headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "testo": domanda.testo,
        "tipologia":domanda.tipologia,
        "indice": domanda.indice,
        "risposte":domanda.risposte
      })
    })
    .then(function (response) {
      //il DB risponde con un json (domanda appena creata)
      console.log(response);
      return response.json()
    })
    .catch(function (err) {
      console.log("errore fetch: " + err.message);
    })
  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '55ch',height:"10ch" } }}
          noValidate
          autoComplete="on">
       
          <div>
            <TextField
              id="testo"
              name="testo"
              value={domanda.testo}
              label="Testo della domanda"
              placeholder="Inserisci domanda"
              multiline
              variant="standard"
              onChange={TestoDomanda}

              InputProps={{
                endAdornment: domanda.testo? (
                  <IconButton size="small" onClick={() =>
                    setDomanda((params) => {
                        return {
                          ...params,
                          testo:""
                        }
                      })}>
                    <ClearIcon/>
                  </IconButton>
                ) : undefined
              }}

              
            />
          </div>
        </Box>

        <br></br>


        <div>

          {/* Scelta tra checkbox, radio button e risposte libera */}
          <FormControl>
            <FormLabel id="tipologia">Tipo:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="checkbox"
              name="tipologia"
              onChange={TipoDomanda}
            >
              <FormControlLabel value="Checkbox" control={<Radio size="small" />} label="CheckBox" sx={{ marginRight: "50px" }} />
              <FormControlLabel value="Radio" control={<Radio size="small" />} label="Radio Button" sx={{ marginRight: "50px" }} />
              <FormControlLabel value="Risposta libera" control={<Radio size="small" />} label="Testo libero" sx={{ marginRight: "50px" }} />
            </RadioGroup>
          </FormControl>

        </div>

        <br></br>

        <Box sx={{ '& .MuiTextField-root': { m: 2, width: '100ch' }, }}>
          <Button
            type='button'
            variant="text"
            size="medium"
            sx={{ marginRight: "20px", marginTop: "20px", marginLeft: "10px" }}
            onClick={aggiungiAlClick}
          >
            Aggiungi risposta
          </Button>

          <Button
            type='submit'
            variant="text"
            size="medium"
            sx={{ marginRight: "20px", marginTop: "20px", marginLeft: "100px" }}

          >
            Conferma Domanda
          </Button>

        </Box>
        <br></br>

        <Box
          noValidate
          autoComplete="off" sx={{ '& .MuiTextField-root': { m: 2, width: '60ch' }, }}>
          <div>
            { //per ogni elemento dell'array risposte mando a video un textfield (e anche un bottone)
              listaRisposte.map((listaRisp, indice) => {
                return (
                  <div key={indice}>
                    <TextField
                      id="risposta"
                      name='risposta'
                      value={listaRisp.risposta}
                      label="Inserisci una risposta"
                      multiline
                      maxRows={4}
                      variant="standard"
                      onChange={e => AggiungiRisposte(indice, e)}

                      InputProps={{
                        endAdornment: listaRisp.risposta? (
                          <IconButton size="small" 
                                      onClick={ e => ClearRisposta(indice)}>
                            <ClearIcon/>
                          </IconButton>
                        ) : undefined
                      }}
                    />
                  </div>
                )
              })
            }
          </div>
        </Box>
      </form>
    </div>

  );
}
