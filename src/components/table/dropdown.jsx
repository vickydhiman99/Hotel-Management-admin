import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120,float:'right'}}>
        <InputLabel id="demo-simple-select-standard-label">Day</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>YeasterDay</MenuItem>
          <MenuItem value={30}>Today</MenuItem>
          <MenuItem value={30}>Weekly</MenuItem>
          <MenuItem value={30}>Monthly</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 ,float:'right'}}>
        <InputLabel id="demo-simple-select-filled-label">Money</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Paid</MenuItem>
          <MenuItem value={20}>OnPaid</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
