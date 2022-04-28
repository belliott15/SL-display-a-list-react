
import CandyList from './CandyList.js';
import './App.css';
import { candies } from './candies.js';
// import your arrays here

function App() {
  return (
    <div>
      <div className="App">
        <CandyList candies={candies} />
      </div>
    </div>
    
  );
}

export default App;
