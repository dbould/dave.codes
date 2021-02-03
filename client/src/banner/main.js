import React from 'react'
import banner from "../img/cropped-benjiBanner5.png";
import {Jumbotron} from "react-bootstrap";

function Banner() {
    return (
        <Jumbotron fluid id="banner">
            <div>
                <img src={ banner } alt="banner" />
            </div>
        </Jumbotron>
    )
}

export default Banner;
