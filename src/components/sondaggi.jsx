import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { Box } from '@mui/system';

import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const RenderButton = (props) => {
    const navigate=useNavigate();
  
     
    return (
       
        <Button
            onClick={() => {
              
                //Al click il bottone mi rimanda al sondaggio
                navigate("/VediSondaggio/" + props.riga.id );
                 
            }}
          
            component="button"
            variant="text"
            size="small"
            sx={{ color: "#000" , "&:focus":{color:"#1976d2"}, "&:hover":{color:"#1976d2"}}  }>

            Vedi
             </Button>
    
    );

  };


export default function DataGridSondaggi() {
    const [sondaggi,setSondaggi]= useState([]); 

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
        {
            field: 'Action',
            // renderCell: () => <RenderButton/> No
            renderCell: (e) => <RenderButton riga={e.row}/>,
            //Renderizza alla riga 
            // renderCell: RenderButton
            width:150
        
        }
    ]
    

    useEffect(() => {
        fetchSondaggi()
    },[])

    const fetchSondaggi =()=>{
        //fetch per prender i sondaggi
        fetch("http://localhost:3000/API/getSondaggi").then(function (response) {
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
           setSondaggi(json_ridotto);
        
            
            // console.log("Dati", sondaggi)
        }).catch(function (err) {
            console.log("fetch" + err.message);
        
        })
        };
       

    return (
   
         <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={sondaggi}
                columns={columns}
                columnVisibilityModel={{id:false}}//Rendo hidden id
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                
          />   
        
         </Box>
       
     

    );
}


