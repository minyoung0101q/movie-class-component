import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
    return (
        <div>
            <h4>{title}</h4>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;