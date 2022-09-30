import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

import { useState } from 'react';
import { useEffect } from 'react';





export default function DataGridDemo() {
    const [domande,setDomande ]= useState([]); 

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 120
        },
        {
            field: "testo",
            headerName: "Testo della domanda",
            width: 300
        },
        {
            field: 'tipology',
            headerName: 'Tipologia',
            width: 120
        },


      //  { field: 'risposte', headerName: 'Risposte', width: 120 }
       
      
    
    
    ]

    useEffect(() => {
        fetchDomande()
    },[])

    const fetchDomande =()=>{
        //fetch per prender le domande
        fetch("http://127.0.0.1:5500/src/json/domande.json").then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json)
           
            let json_ridotto = json.map((x) => (
                {
                    id: x.testo,
                    testo: x.testo,
                    tipology: x.tipologia
                  
                } 
               ))
           setDomande(json_ridotto);
        
            
            console.log("Dati", domande)
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

