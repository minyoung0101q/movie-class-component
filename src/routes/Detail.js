import React from "react";
import "./Detail.css";

class Detail extends React.Component {

    componentDidMount() { // state가 undefined 일 때 해결 -> history.push("/") -> url 변경
        console.log(this.props); // react router가 Detail 컴포넌트한테 props 4개를 넘겨주고, Movie 컴포넌트의 Link 컴포넌트가 state를 전달함
        const { location, history } = this.props;
        console.log(location.state);
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <section className="detail-container">
                    <div className="detail-movie">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                        <div className="detail-movie__data">
                            <h2>{location.state.title}</h2>
                            <h5>{location.state.year}/{location.state.rating}</h5>
                            <ul>
                                {location.state.genres.map(g => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                            <p>{location.state.summary}</p>
                        </div>
                    </div>
                </section>
            )
        } else {
            return null;
        }
    }
}

export default Detail;