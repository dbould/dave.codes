import banner from './img/cropped-benjiBanner5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Jumbotron, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">dave.codes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Subscribe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Jumbotron fluid id="banner">
            <div>
                <img src={ banner } alt="banner" />
            </div>
        </Jumbotron>
      <header className="App-header">

      </header>
        

    </div>
  );
}

export default App;
