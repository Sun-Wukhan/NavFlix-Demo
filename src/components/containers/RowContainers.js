import React, { useState, useEffect } from 'react'
import Row from '../rows/Row'
import '../../styling/row/Row.css'
import axios from '../../api/axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function RowContainers({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
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

    const handleClick = (movie) => {
        // console.table(movie?.title)
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch((error) => console.log(error));
        }
    }

    const showMe = () => {
        setRickRoll(rickRoll => !rickRoll);
    }


    const movieCards = movies.map((movie) => {
        return <Row id={movie.id} onClick={() => handleClick(movie)} className={isLargeRow ? 'row__posterLarge shadow-5 grow ma2' : 'row__poster shadow-5 grow ma2'} imagePath={`${baseURL}${movie.poster_path}`} alt="" />
    })

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movieCards}
            </div>
            <div style={{ padding: "40px" }}>
                {trailerUrl && < Youtube videoId={trailerUrl} opts={options} />}
            </div>
        </div>
    )
}

export default RowContainers

