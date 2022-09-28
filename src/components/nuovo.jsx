import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Done } from '@mui/icons-material';
import { useState } from 'react';



function Icon(){
    return(
        <div>
    <ControlPointIcon/>
    </div>
    )
}



const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
        field: 'firstName',
        headerName: 'Tipologia',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Domanda',
        width: 150,
        editable: true,
    },

    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: "Aggiungi",
        headerName:
        <Button variant="text"  sx={{textTransform: 'none', color:"#000"}} endIcon={<ControlPointIcon />}>
        Aggiungi una domanda
      </Button>,
        sortable:false,
        description: "bo",
        width: 250
    }


]

// const [i, ]= useState(0);


//fetch per prender le domande
fetch("http://127.0.0.1:5500/src/json/domande.json").then(function (response) {
    return response.json();
}).then(function (json) {
   let domande = json;

    console.log("Dati", domande)
}).catch(function (err) {
    console.log("fetch" + err.message);

});






const rows = [

     
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },

];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
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

