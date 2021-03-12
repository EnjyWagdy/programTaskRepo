
import React from "react";
import pic from "../Assets/Images/ESAIP.png"
import {allData} from "./Data"

const ListItems = ({filterData, ...props}) => {
  return (
    <div className="listItems shadowbox">
{(filterData??[]).map((item, i) => 
     <div className="row" key={item+i}>
     <div className="col-md-2 p-md-0 text-center">
       <span className="listItems--img"><img src={"/Images/"+item.school+".png"}  alt="Logo"  width="100%"/></span>  
     </div>
     <div className="col-md-10 text-left p-md-0">
       <h5 className="listItems--h">{item.Name}</h5>
       <label className="listItems--label">{item.school}</label>
<small className="listItems--lighttext">Tuition Fee</small>
<small className="listItems--bluetext">{item.fee} Per Year</small>
<small className="listItems--bluetext ml-md-5">{item.city}</small>


     <button className="primary--btn">More info</button>

     </div>
    
 </div>
)}
   
   
  </div>
  );
};
export default ListItems;
