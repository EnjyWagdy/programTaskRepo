import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Styles/styles.css';
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import Container from "./Components/Container"
import Footer from "./Components/Footer"
import {allData} from "./Components/Data"
function App() {
  const [filterData, setFilterData] = React.useState(allData);
  const [searchData, setSearchData] = React.useState();
  const [filterValues, setFilterValues] = React.useState();
  React.useEffect(()=>{
    if(allData){
      setFilterData(allData.filter(d =>{
        let sName = searchData?.name?.trim()?.toLowerCase();
        if(sName && sName != "" && (d.Name??"").toLowerCase().indexOf(sName) < 0)return false;
        let sCity = searchData?.city?.trim()?.toLowerCase();
        if(sCity && sCity != "" && (d.city??"").toLowerCase().indexOf(sCity) < 0)return false;

        let fCities = filterValues?.cities ??[];
        if(fCities && fCities.length > 0 && fCities.indexOf(d.city)<0)return false;
        let fSchools = filterValues?.schools ??[];
        if(fSchools && fSchools.length > 0 && fSchools.indexOf(d.school)<0)return false;
        let fFields = filterValues?.Fields ??[];
        if(fFields && fFields.length > 0 && fFields.indexOf(d.type)<0)return false;
        return true;
      }));
      
    }
  }, [allData, searchData, filterValues]);

  return (
    <div className="App">
     <Navbar></Navbar>
     <Search onSearch={(n,c)=> setSearchData({name:n, city:c})}></Search>
     <Container filterData={filterData} onFilter={f => setFilterValues(f)}></Container>
     <Footer></Footer>
    </div>
  );
}

export default App;
