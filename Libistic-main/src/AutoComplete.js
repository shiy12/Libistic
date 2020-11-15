import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Height } from '@material-ui/icons';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="Search the library"
      options={top100Films}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: 400, Height: 40}}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search the library" variant="outlined" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: "Hamilton Public Library - Barton Branch, Barton Street East, Hamilton, ON"},
    { title: "Hamilton Public Library - Westdale Branch, King Street East, Hamilton, ON"},
    { title: 'Health Sciences Library, McMaster University, Health Sciences Centre, Main Street West, Hamilton, ON'},
    { title: 'H.G. Thode Library of Science and Engineering, Main Street West, Hamilton, ON'},
    { title: 'McMaster University, Main Street West, Hamilton, ON'},
    { title: 'Mills Memorial Library, Main Street West, Hamilton, ON'},

];
