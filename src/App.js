import React, { useState, useEffect, useCallback } from "react";
import SwapiHero from "./components/SwapiHero";
import axios from "axios";
import styled from "styled-components";
const Input = styled.input`
height: 25px;
width: 250px;
font-size: 20px;
background-color: azure;
border: 1px solid blueviolet;
`
function HomePage() {
  // - компонент
  const [input, setInput] = useState("");
  const [hero, setHero] = useState(""); // для данных о герое
  const [data, setData] = useState([]); // data - переменная состояния(начальное состояние), setData - функция изменения состояния

  function makeSwapiRequests() {
    // как вариант обернуть в промис?????
    axios({
      method: "get",
      url: "https://swapi.dev/api/people/?search=" + input,
    }).then((res) => setData(res.data.results));
  }
  useEffect(() => {
    //эффекты выполняются после каждого рендера, только после изменения DOM
    makeSwapiRequests();
  }, [input]);
  function searchHero(event) {
    const { value } = event.target;
    setInput(value.toLowerCase());
  }
  function handleSwapiHero(name) {
    //обрабатываем клик
    setInput(name);
    const dataFind = data.find((element) => element.name === name); // ищем в массиве объект с нашим героем
    setHero(JSON.stringify(dataFind));
  }
  return (
    <div className="App">
      <div>
        <Input onChange={searchHero} placeholder="Hero name:" />
      </div>
      {data.map(({ name }) => {
        return (
          <SwapiHero
            onClick={() => handleSwapiHero(name)}
            key={name}
            name={name}
          ></SwapiHero>
        );
      })}
      <div>{hero}</div>
    </div>
  );
}
export default HomePage;
