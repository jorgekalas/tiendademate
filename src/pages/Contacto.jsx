import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Contacto() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { nombre, email, mensaje } = form;

    if (!nombre || !email || !mensaje) {
      toast.error('Por favor completá todos los campos');
      return;
    }

    toast.success('Mensaje enviado con éxito');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Contacto</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="nombre" type="text" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Tu email" value={form.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control name="mensaje" as="textarea" rows={4} value={form.mensaje} onChange={handleChange} />
        </Form.Group>
        <Button variant="success" type="submit">Enviar mensaje</Button>
      </Form>
    </Container>
  );
}

export default Contacto;
