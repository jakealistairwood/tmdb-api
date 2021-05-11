import axios from 'axios';
import { useState, useEffect } from 'react';
import requests from '../utils/requests';

const Home = ({ results }) => {

    console.log(results);

    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
        setMovie(results[
            Math.floor(Math.random() * results.length - 1)
        ]);
    }, []);

    return (
        <header className="h-screen" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="flex flex-col justify-center h-screen ml-10 w-4/12">
                <h1 className="text-white text-5xl mb-6 font-bold">
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <h3 className="leading-6 text-white">{movie.overview.substring(0, 250)}</h3>
                <div className="flex flex-row items-center">
                    <button>Play</button>
                    <button>More Info</button>
                </div>
            </div>
        </header>
    )
}

export default Home
