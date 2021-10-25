import 'bootstrap/dist/css/bootstrap.min.css'
import './book.css'
import { useState } from 'react'
export function Book(props) {
  const [isOpened, setOpened] = useState(false)

  return (
    <div className='book-outer'>
      <div className='book mx-auto ms-1 me-1'>
        <img className='w-100 h-auto' alt={props.book.title} src={props.book.cover}></img>
        <div className='book-info'>
          <div className='book-header'>
            <div className='book-title-wrapper'>
              <h2 className='fs-1'> "{props.book.title}"</h2> от <i><strong>{props.book.Author}</strong></i>
            </div>

            <div class="checkbox_wrapper">
              <input class='checkbox' type='checkbox' onClick={() => setOpened(!isOpened)} className='btn btn-toogler' />

              <label class='arrow'></label>
            </div>




          </div>
          <p className={`book-summary ${isOpened ? 'open' : ''}`}>
            {props.book.summary}

            <p className='fs-3 link-primary mt-3'>Прочети отзив</p>
          </p>
        </div>
      </div>

    </div>
  )
}
