// Importing essentials from different components
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ReactComponent as Favorite} from './favorite.svg';
import { Card } from 'react-bootstrap';

function HornedBeast(props) {
  // Setting a state for our color, clicks, and favorite so we can update it once it changes
  const [clicks, setClicks] = useState(0);
  let [isFavorited, setIsFavorited] = useState(false)
  let [defaultColor, setDefaultColor] = useState("White")

  function imageClick(){
   // This is a conditional check, if its favorited, it wont turn red, and if its white it will turn red
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      setDefaultColor("Red");
    } else {
      setDefaultColor("White");
    }
    // Another condition, if favorite is true the count wont be increased until its false
    if (isFavorited === true){
      return;
    }else {
      setClicks(clicks + 1) 
    }
 
  }
  return (
    // Here I'm forming a container div that contains my card
    <div className="container">
      <div className="row justify-content-center">
        {/* Here I'm creating a card, with my img, title, and text contained with my like button */}
        <Card style={{ width: '18rem' , color:'black'}}>  
            {/* This includes the Name of the beast, its alt,src,and title, and the description*/}
            <Card.Img variant="top"alt={props.alt} src={props.imageUrl} title={props.title} style={{width:props.style.width, height:props.style.height}} className="dragons"/>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>{clicks}</Card.Text>
                <Favorite stroke='red' stroke-width="14" fill={defaultColor} onClick={imageClick}/>
              </Card.Body>
        </Card>
      </div>
    </div>
  
  );
}

export default HornedBeast;