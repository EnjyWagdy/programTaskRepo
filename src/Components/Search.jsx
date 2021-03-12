
import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {cities} from "./Data"

const Search = ({onSearch, ...props}) => {
  const nameRef = React.useRef();
  const cityRef = React.useRef();
  const onSearchClick = ()=>{
//name, city
if(onSearch)
onSearch(nameRef.current.value, cityRef.current.value);
  }

  return (
      
  <div className="row searchSection">
    <div className="col-md-12 text-center">
     <span className="searchSection--content">
        <input className="searchSection--input" id="learnInput" type="text" placeholder="What do you want to learn?" ref={nameRef}/>
        <Autocomplete
         key="hh"
      id="cityInput"
      options={cities}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField {...params}  placeholder="Write or choose city" inputRef={cityRef} />}
    />
        <span className="autocomplete">
        </span>
        <button className="searchSection--searcbtn" type="button" onClick={onSearchClick}>Search</button>
      </span>
    </div>
    </div>

  );
};
export default Search;
