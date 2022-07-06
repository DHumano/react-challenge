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
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={type}>{type}</InputLabel>
      <Select
        labelId={type}
        id={type}
        value={value}
        label={type}
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
