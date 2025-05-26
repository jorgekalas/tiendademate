import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import productos from '../data/productos'; 

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = productos.find(p => p.id === parseInt(id));

  if (!item) return <p>Producto no encontrado.</p>;

  return (
    <div className="text-center mt-4">
      <img src={item.imagen} alt={item.nombre} style={{ maxWidth: '300px' }} />
      <h2 className="mt-3">{item.nombre}</h2>
      <p className="fw-bold">{item.precio}</p>
      <p>{item.descripcion}</p>
      <Button variant="secondary" onClick={() => navigate(-1)}>Volver</Button>
    </div>
  );
}

export default ItemDetail;
