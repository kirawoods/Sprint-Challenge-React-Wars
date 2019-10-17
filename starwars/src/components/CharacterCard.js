import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterCard.css"

export const CharacterCard = props => {
    const [cardInfo, setCardInfo] = useState([]);
    useEffect(() => {
      axios
        .get('https://swapi.co/api/people/')
        .then(response => {
          const peopleObject = response;
          console.log(peopleObject);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    return (
      <div class="card-container">
          <h3>Character Name</h3>
      </div>
    );
  };
  