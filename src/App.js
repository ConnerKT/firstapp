import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast'
import { useState } from 'react';


function App() {
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false)

  return (

    <div className="App">
      <div>
        <Header/>
        {displaySelectedBeast === true ? <SelectedBeast/> : <></>}
        <Main updateFunction={setDisplaySelectedBeast}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
