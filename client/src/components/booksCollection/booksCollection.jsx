import 'bootstrap/dist/css/bootstrap.min.css'
import './booksCollection.css'
import { Book } from '../book/book'
import { useRef } from 'react';
import { useResize } from '../../hooks/useResize'
export function BooksCollection(props) {
    let id = 0;

    const componentRef = useRef()
    const { width, height } = useResize(componentRef)

    const books = [...Array(20)].map((e) => {
        id++;
        return {
            id,
            title: 'Заглавие',
            summary: 'Придя домой я достал телефон, и увидел что на часах всего 9 вечера. Прилипшая к телефону бумажка с номером телефона так и манила набрать номер, повернув её я прочёл имя - “Анжела”. Я набрал номер и после пары гудков услышал голос: “Алё, кто это?” “Вы мне оставили утром свой телефон и сказали утром позвонить” “А, поняла”, - усмехнулась она - “уже не терпится?” “Да” “Тогда громко и чётко попроси и я пришлю тебе адрес и указания” “Позвольте мне вылизать вашу киску, пожалуйста”, - громко сказал я. “Я смотрю ты полон энтузиазма”, - посмеялась она и добавила - “сохрани мой номер и каждый раз когда я звоню...',
            cover: 'https://images-eu.ssl-images-amazon.com/images/I/4167n959yuS._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
            Author: 'Циганин с меч'
        }
    })

    console.log(width);

    const arrays = [[], []];
    if (width > 576) {
        arrays.push([])
    }

    for (let i = 0; i < books.length; i++) {
        arrays[i % arrays.length].push(books[i])
    }

    return (
        <div className='books-collection' ref={componentRef}>
            {arrays.map(array =>
            (<div className='books-column'>  {array.map((book => (<Book key={book.id} book={book}></Book>)))}
            </div>)
            )}

        </div>
    )
}
