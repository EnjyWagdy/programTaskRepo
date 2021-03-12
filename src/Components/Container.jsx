
import React from "react";
import ListItems from "./ListItems"
import FilterSearch from "./FilterSearch"
const Container = ({filterData, onFilter, ...props}) => {

  return (
    <div className="row bodyContainer">
   <div className="col-md-5">
     <FilterSearch onFilter={onFilter}></FilterSearch>
   </div>
   <div className="col-md-7">
    <ListItems filterData={filterData}></ListItems>
   </div>
  </div>
  );
};
export default Container;
