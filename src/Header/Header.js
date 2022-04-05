import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'


function Header() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img src="CY_Tech.png" width="100"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#action-plan" className="text-primary">Plan d'action</Nav.Link>
                        <Nav.Link href="#" className="text-primary">Stratégie</Nav.Link>
                        <Nav.Link href="#" className="text-primary">Qui sommes-nous ?</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;
