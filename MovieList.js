import React,{useState} from 'react'

function MovieList() {
    const [movies,setMovies] = useState([
        {
            name: 'first movie',
            price: '10$',
            id: 0,
        },
        {
            name: 'second movie',
            price: '10$',
            id: 1,
        },
        {
            name: 'third movie',
            price: '10$',
            id: 12,
        }
    ])
    return (
        <div>
            <h1>{
            movies.map(movie => (
                <li>{movie.name}<strong>{" "+movie.price}</strong></li>
            ))
            }</h1>
        </div>
    )
}

export default MovieList
