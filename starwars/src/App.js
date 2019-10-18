import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import CharacterCard from './components/CharacterCard';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [cardInfo, setCardInfo] = useState([]);
    useEffect(() => {
      axios
        .get('https://swapi.co/api/people/')
        .then(response => {
          const peopleObject = response.data.results;
          setCardInfo(peopleObject);
          console.log(peopleObject);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {cardInfo.map(cardInfo => {
          return <CharacterCard cardInfo={cardInfo} key={cardInfo.name} />;
        })}
      </div>
    </div>
  );
}

export default App;
