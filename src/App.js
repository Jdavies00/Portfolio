
import './App.css';
import Header from './component/header'
import Jumbotron from './component/jumbotron';
import Cards from './component/cards';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Jumbotron />
      <Cards id="CardDeck" />
        
      
      

    </div>
  );
}

export default App;
