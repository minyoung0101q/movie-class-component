import React from "react";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    componentDidMount() { // render 호출 후(mounting 후), componentDidMount가 호출됨
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 6000)
    }

    render() {
        const { isLoading } = this.state; // 비구조화 할당
        return (
            <div>
                <h2>{isLoading ? "Loading..." : "We are ready"}</h2>
            </div>
        )
    }
}

export default App;