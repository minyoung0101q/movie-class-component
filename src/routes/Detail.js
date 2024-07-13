import React from "react";
import styled from "styled-components";
import {
    RatingYear,
    Summary,
    Genres,
    GenresLi,
    Title,
    MovieData,
    Poster
} from "../styles/sharedStyles";

class Detail extends React.Component {

    componentDidMount() { // 페이지 이동 관련
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        } // else 라면 그대로 페이지 유지 -> 그래서 코드가 아무것도 없어도 됨
    }

    render() { // 렌더링 관련
        console.log(this.props);
        const { location } = this.props;

        if (location.state !== undefined) {
            return (
                <DetailContainer>
                    <MovieComponent>
                        <Poster src={location.state.poster} title={location.state.title} alt={location.state.title} />
                        <MovieData>
                            <Title>{location.state.title}</Title>
                            <Genres>
                                {location.state.genres.map(g => (
                                    <GenresLi key={g}>{g}</GenresLi>
                                ))}
                            </Genres>
                            <Summary>{location.state.summary.slice(0, 1500)}...</Summary>
                            <RatingYear>{location.state.rating} / {location.state.year}</RatingYear>
                        </MovieData>
                    </MovieComponent>
                </DetailContainer>
            )
        } else {
            return null;
        }

    }
}

const DetailContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MovieComponent = styled.div`
   display: flex;
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 5px;
   width: 50%;
   align-items: flex-start;
   box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
        0 8px 16px -8px rgba(0, 0, 0, 0.3),
        0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

export default Detail;