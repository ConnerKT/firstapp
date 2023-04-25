import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function App(props) {
  // This is a use state call, I'm setting the two values its gonna return, a function, and the variable.
  // This one is for displaying the Selected Beast
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false);
// This state sets the image into my selected beast modal
  const [modalImage, setModalImage] = useState(undefined);
  // This state sets the body(description) into my selected beast modal
  const [modalBody, setModalBody] = useState("");
  // This state sets the title into my selected beast modal
  const [modalTitle, setModalTitle] = useState("");

  return (

    <div className="App">
      <div>
        <Header/>

        {/* {displaySelectedBeast === true ? <SelectedBeast/> */}
        {/* This sets up a tenary operator for the select beast display, and sets the variable to the component so we can change it */}
        {displaySelectedBeast === true? <SelectedBeast title={modalTitle} body={modalBody} image={modalImage}/>: <></>}

         {/* : <></>} */}
         {/* This is passing functions into our child components, by setting a function name and setting it to our setModal item, we can change the info in our childs */}
        <Main updateFunction={setDisplaySelectedBeast} updateImageFunction ={setModalImage} updateBodyFunction ={setModalBody} updateTitleFunction ={setModalTitle}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
