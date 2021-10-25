import { Navbar } from "./components/Nav/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BooksCollection } from "./components/booksCollection/booksCollection";

function App() {
 
  return (

    <div className="App">
      <Navbar/>
      <BooksCollection></BooksCollection>
     
    </div>
  );
}

export default App;
