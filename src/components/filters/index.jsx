/* eslint-disable no-unused-vars */
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as S from './Styled';

const Filters = (filters) => {
  const { section, windows, sort, handleSection, handleWindows, handleSort } =
    filters;

  const handleChange = (event) => {
    handleSection(event.target.value);
  };

  return (
    <S.Wrapper>
      <FormControl sx={{ m: 2, minWidth: 220 }}>
        <InputLabel id="Section">Section</InputLabel>
        <Select
          labelId="Section"
          id="Section"
          value={section}
          label="Section"
          onChange={handleChange}
        >
          <MenuItem value="hot">hot</MenuItem>
          <MenuItem value="top">top</MenuItem>
          <MenuItem value="user">user</MenuItem>
        </Select>
      </FormControl>
    </S.Wrapper>
  );
};

export default Filters;
