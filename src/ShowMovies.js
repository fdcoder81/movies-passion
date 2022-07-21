export const ShowMovies = ({movie, handleClick}) => {


    let image_url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;


    return (

        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" src={image_url} alt="Card cap"/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <button onClick={() => handleClick(movie)} className="btn btn-primary mt-auto">
                        More Info and Trailers
                    </button>
                </div>
            </div>
        </div>
    )
}
