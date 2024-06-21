import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres, rating }) {
    return (

        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <Link to={{
                    pathname: `/movie/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres,
                        rating
                    }
                }} className="movie__title">{title}</Link>
                <h5 className="movie__year__rating">{year}/{rating}</h5>
                <ul className="movie__genres">
                    {genres.map(g => (
                        <li key={g} className="genres__genre">{g}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>

    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;