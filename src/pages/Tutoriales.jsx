import { Container, Row, Col, Card } from 'react-bootstrap';

const tutoriales = [
  {
    id: 1,
    titulo: 'Cómo curar un mate nuevo',
    descripcion: 'Paso a paso para curar tu mate de calabaza o madera.',
    imagen: '/assets/tutorial1.jpg'
  },
  {
    id: 2,
    titulo: 'Cómo preparar un buen mate',
    descripcion: 'Temperatura del agua, tipo de yerba y técnica correcta.',
    imagen: '/assets/tutorial2.jpg'
  },
  {
    id: 3,
    titulo: 'Cómo limpiar tu bombilla',
    descripcion: 'Trucos para mantenerla siempre impecable.',
    imagen: '/assets/tutorial3.jpg'
  }
];

function Tutoriales() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Tutoriales</h2>
      <Row>
        {tutoriales.map(tut => (
          <Col key={tut.id} sm={12} md={6} lg={4} className="mb-4">
            <Card  className='card-hover'>
              <Card.Img variant="top" className='img-card' src={tut.imagen} />
              <Card.Body>
                <Card.Title>{tut.titulo}</Card.Title>
                <Card.Text>{tut.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Tutoriales;
