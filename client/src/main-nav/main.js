import {Nav, Navbar} from "react-bootstrap";

function MainNav() {
    return (
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
    )
}

export default MainNav;
