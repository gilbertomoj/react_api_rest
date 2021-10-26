import React,{useState, useEffect} from 'react';

import './App.css';
import api from './api';

function App() {
  const [ data, setData] = useState([]);

  useEffect(()=>{
      api.get("https://ghibliapi.herokuapp.com/films/").then((response)=>{
          setData(response.data)
          console.log(response.data);
      }).catch((error)=>{
          console.log(error)
      })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {data.map((info,key)=>{
          return(
          <div>
            <h1>{info.title}</h1>
            <h1>{info.description}</h1>
          </div>

          )
        })}
      </header>
    </div>
  );
}

export default App;
