import React from "react";

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
                <span>{location.state.title}</span>
            )
        } else {
            return null;
        }
    }
}

export default Detail;