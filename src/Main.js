import HornedBeast from './HornedBeast';
import Data from './data.json';
import { useState } from 'react';
import {ReactComponent as Favorite} from './favorite.svg';

function Main() {
  return (
   
    
        //Using the map method to loop through Data's array of objects
      Data.map(value => {
        return (
          <div>  
          <HornedBeast
          //For each value 0,1,2 etc, it will provide the targeted property for that item.
          id={value.id}
          imageUrl={value.image_url}
          description={value.description}
          style={{width:"100",height:"100"}}
          
          />
        </div>
        );
      }))
  }


export default Main;
