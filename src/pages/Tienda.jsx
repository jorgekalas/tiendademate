import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const productos = [
  { id: 1, nombre: 'Mate Imperial', precio: '$4500', imagen: 'src/assets/mate1.jpg' },
  { id: 2, nombre: 'Yerba Orgánica', precio: '$1500', imagen: 'src/assets/yerba1.jpg' },
  { id: 3, nombre: 'Bombilla de Alpaca', precio: '$2000', imagen: 'src/assets/bombilla1.jpg' },
  { id: 4, nombre: 'Set Matero', precio: '$12.000', imagen: 'src/assets/set-matero.jpg' }
];

function Tienda() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Nuestros Productos</h2>
      <Row>
        {productos.map(prod => (
          <Col key={prod.id} sm={12} md={6}  className="mb-4">
            <Card className="card-hover">
              <Card.Img variant="top" src={prod.imagen} className='img-card' />
              <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>{prod.precio}</Card.Text>
                <Button variant="success">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Tienda;
