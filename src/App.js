import React from "react";

class App extends React.Component {
    state = {
        count: 0
    }
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    }
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    }

    render() {
        return (
            <div>
                <h2>This is number : {this.state.count}</h2>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;