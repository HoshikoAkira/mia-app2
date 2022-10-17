import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {/* <FormControlLabel value="male" control={<Radio />} label="Male" sx={{ marginLeft: "10px" }}/> */}
       <FormControlLabel value="male" control={<Radio />} label="Male" sx={{ marginLeft: "10px" }}/>
        <FormControlLabel value="male" control={<Radio />} label="Male"sx={{ marginLeft: "10px" }} />
        <FormControlLabel value="altro" control={<Radio />} label="Other" sx={{ marginLeft: "10px" }}/>
      </RadioGroup>
    </FormControl>
  );
}
