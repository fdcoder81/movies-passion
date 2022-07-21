import moviedb from "./api/movieDb";
import {useEffect, useState} from "react";
import {ShowMovies} from "./ShowMovies";
import {Search} from "./Search";
import './app.css'
import youtube from "./api/youtube";
import {MovieDetails} from "./MovieDetails";

const youtubeKey = "AIzaSyDPFfAC1DXR_JWBP9B1A3sacvcaUriM8_A";
const key = "31e3c537946929f18904b39eeb3f7e1a";

function App() {
    const [popularMovies, setPopularMovies] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    const [showDetails, setShowDetails] = useState(false);
    const [movieSelected, setMovieSelected] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            const result = await moviedb.get("/discover/movie?sort_by=popularity.desc", {params: {api_key: key}})
            setPopularMovies(result.data.results)
        }
        fetchPopularMovies()
    }, [])

    const onSubmit = async term => {
        const response = await moviedb.get("/search/movie", {
            params: {
                api_key: key,
                query: term
            }
        });
        setSearchedMovies(response.data.results)
    };

    const getVideo = async term => {
        const response = await youtube.get("/search", {
            params: {
                part: "snippet",
                key: youtubeKey,
                maxResults: 5,
                q: term + " trailer"
            }
        });
        setVideos(response.data.items);
    };


    const closeDetails = () => {
        setShowDetails(prevState => !prevState);
    };

    const handleClick = (movie) => {
        getVideo(movie.title)
        setMovieSelected(movie)
        setShowDetails(prevState => !prevState);
    }


    if (!popularMovies.length) {
        return <div>Loading...</div>
    }

    return (
        <div className={'main'}>
            <div className="content-wrapper">
                <div className={'container mb-4'}>
                    <div className="header">
                        <h1>Movies passion</h1>
                        {!showDetails &&
                        <button onClick={() => setIsSearching(prevState => !prevState)}
                                className="btn btn-primary">{isSearching ? 'Popular Movies' : 'Search Movies'}
                        </button>}
                    </div>
                    {
                        isSearching && !showDetails ? (
                            <>
                                <Search onSubmit={onSubmit}/>
                                <div className="row row-cols-1 row-cols-md-5 g-4">
                                    {searchedMovies.map(item => <ShowMovies key={item.id} movie={item}
                                                                            handleClick={handleClick}/>)}
                                </div>
                            </>
                        ) : !isSearching && !showDetails ? (
                            <div className="row row-cols-1 row-cols-md-5 g-4">
                                {popularMovies.map(item => <ShowMovies key={item.id} movie={item}
                                                                       handleClick={handleClick}/>)}
                            </div>
                        ) : <MovieDetails movieSelected={movieSelected} videos={videos} closeDetails={closeDetails}/>
                    }
                </div>
                <footer className="footer">
                    <h3>Movies Passion &copy; Developed by Carlo Anselmi</h3>
                </footer>
            </div>
        </div>
    );
}

export default App;
