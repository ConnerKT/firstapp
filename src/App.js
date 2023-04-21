import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (

    <div className="App">
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
