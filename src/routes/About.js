import React from "react";
import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span className="about__text">
                "Freedom is the freedom, to say that two plus two make four."
            </span>
        </div>
    )
}

export default About;