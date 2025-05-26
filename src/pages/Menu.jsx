import { Container, Row, Col, Card } from 'react-bootstrap';
import menuItems from '../data/menuItems';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Menú de Productos</h2>
      <Row>
        {menuItems.map(item => (
          <Col key={item.id} sm={12} md={6} className="mb-4">
            <Link to={`/menu/${item.id}`} className="text-decoration-none text-dark">
            <Card className='card-hover'>
              <Card.Img variant="top" src={item.imagen} className='img-card' />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Card.Text className="fw-bold">{item.precio}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
