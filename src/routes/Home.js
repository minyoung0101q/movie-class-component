import React from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "../components/Movie"

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        console.log(movies); // 객체로 구성된 배열
        this.setState({ isLoading: false, movies });
    }

    componentDidMount() { // 외부에서 데이터 받아오고, state에 변화 주기
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;

        return (
            <SectionContainer>
                {isLoading ?
                    <Loader>
                        <LoaderText>Loading...</LoaderText>
                    </Loader>
                    :
                    <MovieContainer>
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                                rating={movie.rating}
                                year={movie.year}
                            />
                        ))}
                    </MovieContainer>
                }

            </SectionContainer>
        )
    }
}

const SectionContainer = styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 80px;
`;

const Loader = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;

const LoaderText = styled.span`
    font-weight: 10;
`;

const MovieContainer = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;



export default Home;