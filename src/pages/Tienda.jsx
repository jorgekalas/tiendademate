import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productos from '../data/productos';


function Tienda() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Nuestros Productos</h2>
      <Row>
        {productos.map(prod => (
          <Col key={prod.id} sm={12} md={6}  className="mb-4">
            <Link to={`/tienda/${prod.id}`} className="text-decoration-none text-dark">
            <Card className="card-hover">
              <Card.Img variant="top" src={prod.imagen} className='img-card' />
              <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>{prod.precio}</Card.Text>
                <Button variant="success">Comprar</Button>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Tienda;
