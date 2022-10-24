import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import { Box } from '@mui/system';
import { Button } from '@mui/material';

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';



const BottoneElimina = (props) => {
    const navigate=useNavigate();


      return (
      
          <Button
              variant="outlined" size="small"    onClick={() => {
                console.log(props.riga.id);
                fetch("http://localhost:3000/API/deleteDomandaById/" + props.riga.id  ,{method:"PATCH"})
                return ((navigate("/sondaggi/" )));
              }}>Elimina
          </Button>

            
      );
    };
    const BottoneModifica = (props) => {
        const navigate=useNavigate();
    
    
          return (
          
              <Button
                  variant="outlined" size="small"    onClick={() => {
                    console.log(props.riga.id);
                  
                    return ((navigate("/modificaDomanda/"+ props.riga.id )));
                  }}>Modifica
              </Button>
    
                
          );
        };


   



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
        {
            field: 'indice',
            headerName: 'Indice',
            width: 200
        },
        
        {
            field: 'Elimina',
            renderCell: (e) => <BottoneElimina  riga={e.row}/>,
            width:150
        
        },
        {
            field: 'Modifica',
            renderCell: (e) => <BottoneModifica riga={e.row}/>,
            width:150
        
        }

    
    ]

    useEffect(() => {
        // console.log(".." +id);
        fetchDomande(id)
    },[])

    const fetchDomande = (id) => {
        //fetch per prender le domande
        fetch(" http://localhost:3000/API/getDomandeByIdSondaggio/" + id).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json)
           
            let json_ridotto = json.map((x) => (
                {
                    id: x._id,
                    testo: x.testo,
                    tipology: x.tipologia,
                    indice: x.indice
                  
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
                columnVisibilityModel={{id:false}}//Rendo hidden id
                rowsPerPageOptions={[5]}
               
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
        />

         </Box>

    );
}

