
import './App.css';
import HornedBeast from './HornedBeast';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Header from './Header';

function App(props) {
  return (

    <div className="App">
      <div>
        <Header/>
        <Main />
      </div>
    </div>
  );
}

export default App;
