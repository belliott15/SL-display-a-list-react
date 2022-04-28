
import DipList from './DipList.js';
import CandyList from './CandyList.js';
import BookList from './BookList.js';
import PlantList from './PlantList.js';
import { dips } from './dips.js';
import { candies } from './candies.js';
import { books } from './books.js';
import { plants } from './plants.js';
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
        <h1>Favorite Plants</h1>
        <PlantList plants={plants} />
      </div>
    </div>
    
  );
}

export default App;
