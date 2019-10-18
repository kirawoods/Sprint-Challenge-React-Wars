import React from "react";
import "./CharacterCard.css"
import { Card } from "@blueprintjs/core";

export default function CharacterCard(props) {
    return (
        <Card>
            <h3>{props.cardInfo.name}</h3>
            <p>Gender: {props.cardInfo.gender}</p>
            <p>Hair Color: {props.cardInfo.hair_color}</p>
            <p>Height: {props.cardInfo.height}</p>
            <p>Mass: {props.cardInfo.mass}</p>
        </Card>
      );
  };
  