import { Card } from 'react-bootstrap';

function HornedBeast(props) {
  return (
    <>
        <Card style={{ width: '18rem' , color:'black'}}>  
            <Card.Img variant="top"alt={props.alt} src={props.imageUrl} title={props.title} style={{width:props.style.width, height:props.style.height}} className="dragons"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
              </Card.Body>
        </Card>
</>
  );
}

export default HornedBeast;