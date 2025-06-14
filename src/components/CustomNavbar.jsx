import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand
					as={Link}
					to="/"
					className="d-flex align-items-center gap-2"
				>
					<img
						src="/assets/favicon.png"
						alt="Logo Tienda de Mate"
						height="30"
						className="d-inline-block align-top"
					/>
					Tienda de Mate
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/">
							Inicio
						</Nav.Link>
						<Nav.Link as={Link} to="/tienda">
							Tienda
						</Nav.Link>
						<Nav.Link as={Link} to="/tutoriales">
							Tutoriales
						</Nav.Link>
						<Nav.Link as={Link} to="/menu">
							Menú
						</Nav.Link>
						<Nav.Link as={Link} to="/trabaja">
							Trabajá con Nosotros
						</Nav.Link>
						<Nav.Link as={Link} to="/franquicias">
							Franquicias
						</Nav.Link>
						<Nav.Link as={Link} to="/contacto">
							Contacto
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CustomNavbar;
