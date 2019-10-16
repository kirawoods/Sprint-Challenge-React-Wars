import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export const CharacterCard = () => {
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
    // return (
    //   <Card>
    //     <CardImg src={image.hdurl} />
    //     <CardBody>
    //       <CardTitle>{image.title}</CardTitle>
    //       <CardSubtitle>{image.date}</CardSubtitle>
    //       <CardText>{image.explanation}</CardText>
    //     </CardBody>
    //   </Card>
    // );
  };
  