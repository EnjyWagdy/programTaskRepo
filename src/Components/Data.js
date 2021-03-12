import Data from "../progs.json"


export const allData=Data[2].data;
export const cities=[];
export const schools=[];
export const Fields=[];


allData.forEach(i =>{
  if(cities.indexOf(i.city) < 0)
  cities.push(i.city);

  if(schools.indexOf(i.school) < 0)
  schools.push(i.school);

  if(Fields.indexOf(i.type) < 0)
  Fields.push(i.type);
});