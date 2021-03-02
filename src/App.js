import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';

function App() {
  return (
    //Container using Bootstrap  
    <div className="container"> 
      <Header></Header>
      <Player></Player>
      
    </div>
  );
}

export default App;
