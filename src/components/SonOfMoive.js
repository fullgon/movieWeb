import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function SonOfMovie({coverImg, id, title, summary, genres}){
    return(
        <div>
                <img src={coverImg} alt={title}/>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary}</p>
                <ul>
                    {genres.map(genre => 
                        <li key={genre}>{genre}</li>)}
                </ul>
            </div>
    )
}

SonOfMovie.prototypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SonOfMovie;