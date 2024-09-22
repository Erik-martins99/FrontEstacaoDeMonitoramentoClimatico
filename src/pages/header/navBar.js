import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Monitoramento Residencial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Paineis" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Tempo Real</NavDropdown.Item>
              <NavDropdown.Item href="/hora">Por Hora</NavDropdown.Item>
              <NavDropdown.Item href="/dia">Por dia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/predicao">Predição</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;