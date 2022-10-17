import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

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
          label="Risposta aperta"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
       
      </div>
    </Box>
  );
}
