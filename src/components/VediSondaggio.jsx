import * as React from 'react';


import { Box } from '@mui/system';

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BasicSelect from './BasicSelect';
import ResponsiveDatePickers from "./Date"
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function VediSondaggio() {

    const navigate = useNavigate();
    const [sondaggio, setSondaggio] = useState([]);
    const { id } = useParams();

    const [idSondaggio, setidSondaggio] = useState("");
    const [titolo, setTitolo] = useState("");
    const [sottotitolo, setSottotitolo] = useState("");
    const [descrizione, setDescrizione] = useState("");
    const [dataInizio, setDataInizio] = React.useState(dayjs());
    const [dataFine, setDataFine] = useState("");
    const [email, setEmail] = useState("");
    const [stato, setStato] = useState('');

    const cambiaStato = (e) => {
        setStato(e.target.value)
      };

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

            console.log("JSON RICEVUTO: ", json)

            let json_ridotto =
            {
                _id: json._id,
                titolo: json.titolo,
                sottotitolo: json.sottotitolo,
                descrizione: json.descrizione,
                dataInizio: json.dataInizio,
                dataFine: json.dataFine,
                email: json.emailCreatore,
                stato: json.stato

            }
            setidSondaggio(json_ridotto._id)
            setTitolo(json_ridotto.titolo)
            setSottotitolo(json_ridotto.sottotitolo)
            setDescrizione(json_ridotto.descrizione)
            setDataInizio(json_ridotto.dataInizio)
            setDataFine(json_ridotto.dataFine)
            setEmail(json_ridotto.email)
            setStato(json_ridotto.stato)

            console.log("JSON RIDOTTO: ", json_ridotto)
            setSondaggio([json_ridotto]);

        }).catch(function (err) {
            console.log("fetch" + err.message);

        })
    };

    const SubmitAggiorna = (e) => {
        e.preventDefault();


        //Fetch che passa i parametri aggiornati al db
        fetch("http://localhost:3000/API/updateSondaggioById/" + id, {
            method: "PATCH", headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "titolo": titolo,
                "sottotitolo": sottotitolo,
                "descrizione": descrizione,
                "dataInizio": dataInizio,
                "dataFine": dataFine,
                "emailCreatore": email,
                "stato": stato
            })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
            })
            .then(navigate(-1)) //Funzione a cui navigare
            .catch(function (err) {
                console.log("errore fetch: " + err.message);
            })

    };


    return (

        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            {/* -------------Parametri del form---------------- */}
            <form onSubmit={SubmitAggiorna}>

                <div>
                    <TextField label="Titolo" variant="outlined"
                        value={titolo} onChange={(e) => {
                            setTitolo(e.target.value)
                        }} />

                    <TextField label="Sottotitolo" variant="outlined"
                        value={sottotitolo} onChange={(e) => {
                            setSottotitolo(e.target.value)
                        }} />
                </div>

                <TextField label="Descrizione" variant="outlined"
                    value={descrizione} onChange={(e) => {

                        setDescrizione(e.target.value)
                    }}
                />
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            label="Data Inizio"
                            minDate={dayjs('2020-01-01')}
                            maxDate={dayjs('2030-01-01')}
                            value={dataInizio}
                            inputFormat="DD/MM/YYYY"

                            onChange={(e) => {
                                setDataInizio(e)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <MobileDatePicker
                            label="Data Fine"
                            minDate={dayjs('2020-01-01')}
                            maxDate={dayjs('2030-01-01')}
                            value={dataFine}
                            inputFormat="DD/MM/YYYY"

                            onChange={(e) => {
                                setDataFine(e)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>

                <TextField label="Email" variant="outlined"
                    value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <div>

             <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Stato</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="simple-select"
                name="stato"
                label="Stato"
                defaultValue='bozza'
                value={stato}
                onChange={cambiaStato}
              >
                <MenuItem value={"aperto"} >Aperto</MenuItem>
                <MenuItem value={"chiuso"}>Concluso</MenuItem>
                <MenuItem value={"bozza"}>Bozza</MenuItem>
              </Select>
            </FormControl>
            </div>
                {/*-------------  Bottoni aggiorna ed elimina------------- */}
                <div>

                    <Button
                        type='submit'
                        variant="outlined"
                        size="medium"
                        sx={{ marginRight: "20px", marginTop: "20px", marginLeft: "10px" }}
                    >
                        Aggiorna
                    </Button>
  

                    <Button variant="outlined" size="medium" sx={{ marginTop: "20px",marginLeft:"40px"}} onClick={() => {
                        navigate("/domande/" + id);

                    }}
                    >
                        Vedi Domande
                    </Button>
                </div>
                {/* ---------------------Fine bottoni ----------- */}

            </form>
        </Box>




    );
}
