import { useState } from 'react'

export function NavBarSearch(props) {
    const [query, setQuery] = useState('')

    return (
        <input style={{ height: '2em' }} value={query} onChange={(event) => setQuery(event.target.value)} type="text" name="" id="" />
    )
}