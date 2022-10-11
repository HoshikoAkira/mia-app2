import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [stato, setStato] = React.useState('');

  const handleChange = (event) => {
    setStato(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Stato</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          value={stato}
          label="Stato"
          onChange={handleChange}
        >
          <MenuItem value={"aperto"}>Aperto</MenuItem>
          <MenuItem value={"chiuso"}>Concluso</MenuItem>
          <MenuItem value={"bozza"}>Bozza</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

