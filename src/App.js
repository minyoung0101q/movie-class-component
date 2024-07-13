import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route exact={true} path="/" component={Home} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/about" component={About} />
        </HashRouter>
    )
}

export default App;