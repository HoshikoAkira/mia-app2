import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { Box } from '@mui/system';
import { Button } from '@mui/material';

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';





export default function DataGridDemo() {
    const [domande,setDomande ]= useState([]); 
    const { id } = useParams();
 

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 200
        },
        {
            field: "testo",
            headerName: "Testo della domanda",
            width: 400
        },
        {
            field: 'tipology',
            headerName: 'Tipologia',
            width: 200
        },

    
    ]

    useEffect(() => {
        fetchDomande(id)
    },[])

    const fetchDomande = (id) => {
        //fetch per prender le domande
        fetch(" http://localhost:3000/API/getDomandeByIdSondaggio" + id).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json)
           
            let json_ridotto = json.map((x) => (
                {
                    id: x.id,
                    testo: x.testo,
                    tipology: x.tipologia
                  
                } 
               ))
           setDomande(json_ridotto);
        
            
            // console.log("Dati", domande)
        }).catch(function (err) {
            console.log("fetch" + err.message);
        
        })
        };

    return (
         <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={domande}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
        />

         </Box>

    );
}

