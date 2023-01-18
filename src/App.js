import React, { useState, useEffect } from "react";
import SwapiHero from "./components/SwapiHero";
import axios from 'axios';
import debounce from 'lodash.debounce';

function HomePage() { // - компонент
  let [input, setInput] = useState('');
  let [data, setData] = useState([])// data - переменная состояния(начальное состояние), setData - функция изменения состояния
  function makeSwapiRequests() {
    axios({
      method: "get",
      url: "https://swapi.dev/api/people/?search=" + input,
      // params: {
      //   _limit: 5
      // }
    })
      .then(res => {
       var response= res.data.results;
        setData(response)
          
      })
  }
  useEffect(() => { //эффекты выполняются после каждого рендера, только после изменения DOM
  makeSwapiRequests()
  }, [])

  // <div>{JSON.stringify(data)}</div>
  function searchHero(event) {
    const { value } = event.target;
    setInput(value.toLowerCase());
    // debounce(makeSwapiRequests,1000);
    makeSwapiRequests()
    
  }
 console.log(data)
  return (
    <div className="App">
      <div><input onChange={searchHero} placeholder="Hero name:" /></div>
      {data
      // .filter(item => item.name.toLowerCase().includes(input))
      .map(({ name }) => {
        return (
          <SwapiHero onClick={() => setData(name)} key={name} name={name}></SwapiHero>
        )
      })}
    </div>)
};
export default HomePage;

