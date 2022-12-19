import * as React from 'react';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import "./Style.css"
export default function Offers() {
  const carouselRef = React.useRef(null); // declare at state level
let resetTimeout; //decalre at state level
  const [spacing, setSpacing] = React.useState(2);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Carousel
    ref={carouselRef}
    enableMouseSwipe={true} itemsToShow={1} renderArrow={null}
    pagination={false}
    enableAutoPlay={true}
    autoPlaySpeed={1800}
   
    breakPoints={breakPoints}  >
    <Item item="one"/>
    <Item item="two"/>
    <Item item="three"/>
    <Item item="four"/>
    <Item item="five"/>
    <Item item="six"/>

    </Carousel>

  );
}
