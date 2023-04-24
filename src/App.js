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
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false);
  const [modalImage, setModalImage] = useState(undefined);
  const [modalBody, setModalBody] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (

    <div className="App">
      <div>
        <Header/>
        {/* {displaySelectedBeast === true ? <SelectedBeast/> */}
        
        {displaySelectedBeast === true? <SelectedBeast title={modalTitle} body={modalBody} image={modalImage}/>: <></>}

         {/* : <></>} */}
        <Main updateFunction={setDisplaySelectedBeast} updateImageFunction ={setModalImage} updateBodyFunction ={setModalBody} updateTitleFunction ={setModalTitle}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
