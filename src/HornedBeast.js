import logo from './logo.svg';
import './App.css';

function HornedBeast(props) {
  return (
    <div>
        {/* This includes the Name of the beast, its alt,src,and title, and the description*/}
        <h2>{props.title}</h2>
        <img alt={props.alt} src={props.imageUrl} title={props.title}></img>
        <p>{props.description}</p>
    </div>
  
  );
}

export default HornedBeast;