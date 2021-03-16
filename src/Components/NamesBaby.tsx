import React from 'react';
import BabyNames from '../babynames.json'
import './NamesBaby.css'


interface BabyNamesTypes {
  name: string;
  id: number;
  sex: string;
};

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

//if boys name make bold
//if girls name make italic
//wrap each one in a div and give the div a classname and apply css

//if (props.sex == "m") { return <div className = "boys"/>  } else { return <div className = "girls />"}

function pTagNames(props: BabyNamesTypes) {
    if (props.sex === "m") {
        return <div>
            <p className= "boys">{props.name}</p>
        </div>
    } else {
        return <div>
            <p className = "girls">{props.name}</p>
        </div>
    }
  //return (<p>{props.name}</p>)
};

function MapNames() {
return (
  <div>
{  BabyNames.map(pTagNames)
}  </div>
)}; 

export default MapNames;