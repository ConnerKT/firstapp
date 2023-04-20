import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ReactComponent as Favorite} from './favorite.svg';

function HornedBeast(props) {
  const [clicks, setClicks] = useState(0);
  let [isFavorited, setIsFavorited] = useState(false)
  let [defaultColor, setDefaultColor] = useState("White")

  function imageClick(){
   
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      setDefaultColor("Red");
    } else {
      setDefaultColor("White");
    }
    if (isFavorited === true){
      return;
    }else {
      setClicks(clicks + 1) 
    }
 
  }
  return (
    <div>
    
        {/* This includes the Name of the beast, its alt,src,and title, and the description*/}
        <h2>{props.title}</h2>
        <img alt={props.alt} src={props.imageUrl} title={props.title} style={{width:props.style.width, height:props.style.height}} className="dragons"></img>
        <p>{props.description}</p>
        <p>{clicks}</p>

        <Favorite fill={defaultColor} onClick={imageClick}/>
        
    </div>
  
  );
}

export default HornedBeast;