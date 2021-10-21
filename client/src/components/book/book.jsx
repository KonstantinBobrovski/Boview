import { BrowserRouter, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './book.css'
import { useState } from 'react'
export function Book (props) {
  const [isOpened, setOpened] = useState(false)

  return (
    <div className='col-12 col-md-6 col-lg-4 border-end border-bottom  border-dark mt-3'>
      <img className='w-100 h-auto' alt={props.book.title} src={props.book.cover}></img>
      <div className='book-info'>
        <p className='text-center'>
          <h2> "{props.book.title}"</h2> от {props.book.Author}
          <br />
          <button onClick={() => setOpened(!isOpened)} className='btn-info'>
            Покажи повече
          </button>
        </p>
        <p className={`book-summary ${isOpened ? 'open' : ''}`}>
          {props.book.summary}

          <p className='fs-3 link-primary mt-3'>Прочети отзив</p>
        </p>
      </div>
    </div>
  )
}
