
import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Fields,cities,schools} from "./Data"

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const FilterSearch = ({onFilter, ...props}) => {
  const [value, setValue] = React.useState('');
  const [selectedCities, setSelectedCites] = React.useState([]);
  const [selectedSchools, setSchools] = React.useState([]);
  const [selectedFields, setFields] = React.useState([]);

  const onFilterClick = ()=>{
    if(onFilter)onFilter({
      cities: selectedCities,
      schools: selectedSchools,
      Fields: selectedFields
    });
    
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="filterSearch shadowbox">
        <div className="row">
          <div className="col-md-12">
            <h5 className="filterSearch--h">City</h5>
            <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={cities}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      onChange={(a,b)=> setSelectedCites(b)}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <span className="checktest">
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          </span>
          {option}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField {...params}  placeholder="Choose one city or more" />
      )}
    />
    <br></br>
    <h5 className="filterSearch--h">Program</h5>
    <RadioGroup aria-label="Program" name="Program" value={value} onChange={handleChange}>
    <FormControlLabel value="Bachelor" control={<Radio />} label="Bachelor" />
    <FormControlLabel value="Master" control={<Radio />} label="Master" />
    <FormControlLabel value="MBA" control={<Radio />} label="MBA" />
    <FormControlLabel value="BHD" control={<Radio />} label="BHD" />

  </RadioGroup>
  <br></br>
  <h5 className="filterSearch--h">Field</h5>
            <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={Fields}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      onChange={(a,b)=> setFields(b)}

      renderOption={(option, { selected }) => (
        <React.Fragment>
          <span className="checktest">
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          </span>
          {option}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField {...params}  placeholder="Choose one field or more" />
      )}
    />
    <br></br>
    <h5 className="filterSearch--h">School</h5>
            <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={schools}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      onChange={(a,b)=> setSchools(b)}

      renderOption={(option, { selected }) => (
        <React.Fragment>
          <span className="checktest">
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          </span>
          {option}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField {...params}  placeholder="Choose one School or more" />
      )}
    />
    <br></br>
    <h5 className="filterSearch--h">Language</h5>
    <RadioGroup aria-label="Language" name="Language" value={value} onChange={handleChange}>
    <FormControlLabel value="All" control={<Radio />} label="All" />
    <FormControlLabel value="English" control={<Radio />} label="English" />
    <FormControlLabel value="French" control={<Radio />} label="French" />

  </RadioGroup>
  <br></br>
  <h5 className="filterSearch--h">Sort</h5>
    <RadioGroup aria-label="Sort" name="Sort" value={value} onChange={handleChange}>
    <FormControlLabel value="lowtohigh" control={<Radio />} label="Price: low to high" />
    <FormControlLabel value="hightolow" control={<Radio />} label="Price: high to low" />

  </RadioGroup>
  <button className="primary--btn" type="button" onClick={onFilterClick}>Filter</button>
            </div>
        </div>
   
  </div>
  );
};
export default FilterSearch;
