import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CharacterCard.css"
import { Card } from "@blueprintjs/core";

export const CharacterCard = props => {
    const [cardInfo, setCardInfo] = useState([]);
    useEffect(() => {
      axios
        .get('https://swapi.co/api/people/1')
        .then(response => {
          const peopleObject = response.data;
          console.log(peopleObject);
          setCardInfo(peopleObject);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    return (
        <Card>
            <h3>{cardInfo.name}</h3>
            <p>Gender: {cardInfo.gender}</p>
            <p>Hair Color: {cardInfo.hair_color}</p>
            <p>Height: {cardInfo.height}</p>
            <p>Mass: {cardInfo.mass}</p>
        </Card>
      );
  };
  