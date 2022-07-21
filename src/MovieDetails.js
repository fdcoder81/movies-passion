import {Trailers} from "./Trailers";

export const MovieDetails = ({movieSelected, videos, closeDetails}) => {

    let image_url = `https://image.tmdb.org/t/p/w500/${movieSelected.poster_path}`;

    return (
        <div className="jumbotron mt-4 pt-2 bg-light">
            <div className="d-flex justify-content-center align-items-center">
                <h3 className="my-4 mx-auto border-bottom border-top p-2 bg-info text-white">
                    Info and Trailers
                </h3>
                <button
                    onClick={closeDetails}
                    className="my-4 m close"
                    type="button"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="card w-75 border-info mx-auto mb-2">
                <img src={image_url} className="card-img-top w-50 align-self-center" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{movieSelected.title}</h5>
                    <p className="card-text font-weight-bold">
                        Release Date : {movieSelected.release_date}
                    </p>
                    <p className="card-text">{movieSelected.overview}</p>
                </div>
                <h4 className={'text-center'}>Trailers</h4>
                <Trailers videos={videos}/>
            </div>
        </div>

    )
}