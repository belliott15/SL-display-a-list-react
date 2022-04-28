
import DipList from './DipList.js';
import CandyList from './CandyList.js';
import { dips } from './dips.js';
import { candies } from './candies.js';
import './App.css';
// import your arrays here

function App() {
  return (
    <div>
      <div className="App">
        <h1>Favorite Dips</h1>
        <DipList dips={dips} />
        <h1>Favorite Candy</h1>
        <CandyList candies={candies} />
        <h1>Favorite Books</h1>
        <BookList books={books} />
      </div>
    </div>
    
  );
}

export default App;
