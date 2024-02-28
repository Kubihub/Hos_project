import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Learnmore from './Components/Learnmore';




function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <Services/>
      <Learnmore/>
     

    </div>
  );
}

export default App;
