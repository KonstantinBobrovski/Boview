import { Navbar } from "./components/Nav/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Book } from "./components/book/book";

function App() {
  const books = [...Array(20)].map((e) => {
    return {
      title: 'Title',
      summary: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      cover: 'https://images-eu.ssl-images-amazon.com/images/I/4167n959yuS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
      Author:'Циганин с меч'
    }
  })
  return (

    <div className="App">
      <Navbar ></Navbar>
      <div className='row'>
      {books.map((el) => (<Book book={el}></Book>))}
      </div>
     
    </div>
  );
}

export default App;
