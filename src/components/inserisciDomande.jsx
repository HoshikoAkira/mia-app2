import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Icon } from '@mui/material';
import { green } from '@mui/material/colors';

export default function InserisciDomande() {
  const [value, setValue] = React.useState('Controlled');



  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
       
        <TextField
          id="standard-textarea"
          label="Inserisci Domanda"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
       <div>
       <Button
            type='submit'
            variant="outlined"
            size="medium"
            sx={{ marginRight: "20px", marginTop: "20px", marginLeft: "10px" }}
            
          >
            CheckBox
          </Button>
         
          </div>
     





      </div>
    </Box>
  );
}
