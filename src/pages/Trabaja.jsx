import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Trabaja() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { nombre, email, mensaje } = form;

    if (!nombre || !email || !mensaje) {
      toast.error('Por favor completá todos los campos para postularte.');
      return;
    }

    toast.success('¡Gracias por postularte! Te contactaremos pronto.');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Trabajá con Nosotros</h2>
      <p className="text-center">
        ¿Querés ser parte de nuestro equipo? Completá el siguiente formulario y nos pondremos en contacto.
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingresá tu nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingresá tu email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contanos por qué querés sumarte</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="mensaje"
            placeholder="Escribí tu mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Trabaja;
