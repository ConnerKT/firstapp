import HornedBeast from './HornedBeast';
import Data from './data.json';
import Container from 'react-bootstrap/Container';

function Main(props) {
  return (
    // Setting a container for the horned beast so we can style it
    <Container style={{display: "flex", 'flex-wrap':"wrap","justify-content":'space-between','object-fit': 'contain'}}>
      {Data.map(value => {

        return (
          // Here we are setting a map method on the data array, making an image, description, and id for each loop.
          <div className='div'>
            <HornedBeast
              //For each value 0,1,2 etc, it will provide the targeted property for that item.
              // With the map function we are looping through an array to give data for each attribute
              id={value.id}
              imageUrl={value.image_url}
              title = {value.title}
              description={value.description}
              style={{ width: "100", height: "100", }}
              updateFunction={props.updateFunction}
              updateImageFunction ={props.updateImageFunction} 
              updateBodyFunction ={props.updateBodyFunction} 
              updateTitleFunction ={props.updateTitleFunction}
            />
            
          </div>
        )
      })}
    </Container>

    //Using the map method to loop through Data's array of objects
  )
}


export default Main;
