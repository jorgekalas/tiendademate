import { Container, Row, Col, Card } from 'react-bootstrap';

const menuItems = [
  {
    id: 1,
    nombre: 'Mate de Calabaza',
    descripcion: 'Clásico mate de boca ancha ideal para cebadas intensas.',
    precio: '$15.200',
    imagen: 'src/assets/menu1.jpg'
  },
  {
    id: 2,
    nombre: 'Yerba con Hierbas',
    descripcion: 'Yerba saborizada con menta. 500g.',
    precio: '$2.700',
    imagen: 'src/assets/menu2.jpg'
  },
  {
    id: 3,
    nombre: 'Termo Inoxidable 1L',
    descripcion: 'Termo de acero inoxidable, mantiene el agua caliente por 12 hs.',
    precio: '$35.000',
    imagen: 'src/assets/menu3.jpg'
  },
  { id: 4, nombre: 'Bolso Matero', descripcion: 'Bolso para llevar todo tu set de mate.', precio: '$9.800', imagen: 'src/assets/bolso-matero.jpg' }
];

function Menu() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Menú de Productos</h2>
      <Row>
        {menuItems.map(item => (
          <Col key={item.id} sm={12} md={6} className="mb-4">
            <Card className='card-hover'>
              <Card.Img variant="top" src={item.imagen} className='img-card' />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Card.Text className="fw-bold">{item.precio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
