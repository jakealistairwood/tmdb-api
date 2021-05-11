import axios from 'axios';
import { useState, useEffect } from 'react';
import requests from '../utils/requests';

const Home = () => {

    const [ movie, setMovie ] = useState([]);

    // useEffect(() => {
    //     const fetchMovie = async () => {
    //         const request = await axios.get(requests.fetchTrending);
    //         setMovie(request.data.results[
    //             Math.floor(Math.random() * request.data.results - 1)
    //         ]);
    //         return request;
    //     }
    //     fetchMovie();
    // }, []);

    return (
        <header>
            <h3>Hero</h3>
        </header>
    )
}

export default Home
