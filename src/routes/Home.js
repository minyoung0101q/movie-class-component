import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        console.log(movies); // 받아온 데이터를 movies state에 넣어주고, loading 상태를 false로 변경
        // 받아온 데이터는 객체로 이루어진 배열

        this.setState({ movies, isLoading: false }); // movies state에 데이터 넣기 / loading 상태 변경
    }

    componentDidMount() { // 생명주기 메서드
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ?
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                    :
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                rating={movie.rating}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                }
            </section>
        )
    }
}

export default Home;