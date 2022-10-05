import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { Box } from '@mui/system';

import { useState } from 'react';
import { useEffect } from 'react';




export default function VediSondaggio() {
    const [sondaggio,setSondaggio ]= useState([]); 
 

    const columns = [
        {
            field: "id",
            headerName: "id",
            width: 100
        },
        {
            field: "titolo",
            headerName: "Titolo del sondaggio",
            width: 200
        },
        {
            field: 'sottotitolo',
            headerName: 'Sottotitolo',
            width: 150
        },
        {
            field: 'descrizione',
            headerName: 'Descrizione',
            width: 200
        },
        {
            field: 'data_inizio',
            headerName: 'dataInizio',
            width: 150
        },
        {
            field: 'data_fine',
            headerName: 'dataFine',
            width: 150
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150
        },

    
    ]

    useEffect(() => {
        fetchSondaggio()
    },[])

    const fetchSondaggio =()=>{
        //fetch per prender sondaggio
        fetch("http://localhost:3000/API/getSondaggioById").then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json)
           
            let json_ridotto = json.map((x) => (
                {
                    id: x._id,
                    titolo: x.titolo,
                    sottotitolo: x.sottotitolo,
                    descrizione: x.descrizione,
                    data_inizio: x.dataInizio,
                    data_fine: x.dataFine,
                    email: x.emailCreatore,
                  
                } 
               ))
           setSondaggio(json_ridotto);
        
            
          
        }).catch(function (err) {
            console.log("fetch" + err.message);
        
        })
        };

    return (
         <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={sondaggio}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
               
            
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
        />

         </Box>

    );
}
