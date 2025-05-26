import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <p className="mb-0">© {new Date().getFullYear()} Tienda de Mate · Todos los derechos reservados</p>
      <small>Desarrollado con ♡ por Jorge Kalas · Clon Tienda de Café</small>
    </footer>
  );
}



export default Footer;



