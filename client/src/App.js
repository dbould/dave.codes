import banner from './img/cropped-benjiBanner5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Jumbotron, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="#home">dave.codes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#subscribe">Subscribe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Jumbotron fluid id="banner">
            <div>
                <img src={ banner } alt="banner" />
            </div>
        </Jumbotron>

        <Card>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

    </div>
  );
}

export default App;
