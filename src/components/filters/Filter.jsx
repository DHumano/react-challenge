import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Filter = (props) => {
  const { type, valueTypes, handleValue, value } = props;

  const handleChange = (event) => {
    handleValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 2, minWidth: 220 }}>
      <InputLabel id="Section">{type}</InputLabel>
      <Select
        labelId="Section"
        id="Section"
        value={value}
        label="Section"
        onChange={handleChange}
      >
        {valueTypes.map((element) => (
          <MenuItem key={element} value={element}>
            {element}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
