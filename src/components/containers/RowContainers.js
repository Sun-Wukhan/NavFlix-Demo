import React, { useState, useEffect } from 'react'
import Row from '../rows/Row'
import '../../styling/row/Row.css'
import axios from '../../api/axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function RowContainers({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    // const [trailers, setTrailers] = useState('');
    const [rickRoll, setRickRoll] = useState(false);

    const baseURL = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const options = {
        height: "390",
        width: "100%",
        playersDVD: {
            autoplay: 1.
        }
    }

    // const clickHandler = (movie) => {
    //     if (trailers) {
    //         setTrailers('')
    //     } else {
    //         movieTrailer(movie?.name || "")
    //             .then((url) => {
    //                 const urlParams = new URLSearchParams(new URL(url).search);
    //                 setTrailers(urlParams.get('v'));
    //             })
    //             .catch(error => console.log(error))
    //     }

    const showMe = () => {
        setRickRoll(rickRoll => !rickRoll);
    }
    // }

    console.log('hello', movies)
    const movieCards = movies.map((movie) => {
        return <Row id={movie.id} onClick={showMe} className={isLargeRow ? 'row__posterLarge shadow-5 grow ma2' : 'row__poster shadow-5 grow ma2'} imagePath={`${baseURL}${movie.poster_path}`} alt="" />
    })

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movieCards}
            </div>
            {rickRoll && < Youtube videoId='dQw4w9WgXcQ' opts={options} />}
        </div>
    )
}

export default RowContainers

