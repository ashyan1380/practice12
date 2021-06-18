import React , {useState , useEffect} from 'react';
import ItemMeno from "./Components/ItemMeno"
import './App.css';

function App() {
  const [choose, setChoose] = useState(0);
  const [menos, setMenos] = useState([
    {
      "nameItem":"Black tea",
      "temp":"100C",
      "time":3
    },{
      "nameItem":"Green tea",
      "temp":"80C",
      "time":2
    },{
      "nameItem":"White tea",
      "temp":"750C",
      "time":2
    }
  ])
  const [isSetInterval, setIsSetInterval] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(menos[choose].time)

  useEffect(() => {
      if(isSetInterval){
        if (seconds > 0 || min > 0) {
          seconds ==0 ? setTimeout(() => setMin(min - 1), setSeconds(59), 1000) : setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
          setSeconds("آماده شد");
        }
      }
    }
  , [isSetInterval, seconds,min])
  const cansle = () =>{
    setInterval(false);
    setSeconds(0);
    setMin(0);
  } 
  return (
    <div className="App">
      <div>
        {menos.map((meno , index)=>(<div key={index} onClick={()=>setChoose(index)}>
          <ItemMeno Item={meno}/>
        </div>))}
      </div>
      {choose !== "" ? <button onClick={()=>setIsSetInterval(true)}>start</button> : ''}
      {choose !== "" ? <button onClick={cansle}>cancle</button> : ''}
      { `${min}:${seconds}`}
    </div>
  );
}

export default App;

// import React,{useState,useEffect}  from "react";
// function App() {
//   const [seconds, setSeconds] = useState(4);
//   const [min, setMin] = useState(1)

//   useEffect(() => {
//     if (seconds > 0 || min > 0) {
//       seconds ==0 ? setTimeout(() => setMin(min - 1), setSeconds(59), 1000) : setTimeout(() => setSeconds(seconds - 1), 1000);
//     } else {
//       setSeconds('BOOOOM!');
//     }
//   });

//   return (
//     <div className="App">
//       <div>
//        { `${min}:${seconds}`}
//       </div>
//     </div>
//   );
// }
// export default App;