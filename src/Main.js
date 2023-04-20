import HornedBeast from './HornedBeast';
import Data from './data.json';
import { useState } from 'react';
import favorite from './favorite.svg';

function Main() {
  let [isFavorited, setIsFavorited] = useState(false)
  let [defaultVisibility, setDefaultVisibility] = useState("hidden")

  function imageClick(){
   
    if(isFavorited === true){
      setDefaultVisibility("visible")
    }
    setIsFavorited(true)
  
  }
  return (
   
    
        //Using the map method to loop through Data's array of objects
      Data.map(value => {
        return (
          <div>  
          <HornedBeast
          // Assigning a class to every single instance
          className="dragons"
          //For each value 0,1,2 etc, it will provide the targeted property for that item.
          id={value.id}
          imageUrl={value.image_url}
          description={value.description}
          width="100"
          height="100"
          onClick={imageClick} />

          <img src={favorite} alt="favorite" style={{display: defaultVisibility }} />
        </div>
        );
      }))
  }


export default Main;
