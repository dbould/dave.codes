import banner from "../img/cropped-benjiBanner5.png";

function Jumbotron() {
    return (
        <Jumbotron fluid id="banner">
            <div>
                <img src={ banner } alt="banner" />
            </div>
        </Jumbotron>
    )
}

export default Jumbotron;
