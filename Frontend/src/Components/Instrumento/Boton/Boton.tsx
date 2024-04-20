import { Link } from "react-router-dom";

interface BotonProps {
  id: number;
}

export const Boton: React.FC<BotonProps> = ({ id }) => (
  <Link to={`/instrumento/${id}`}>
    <button>Ver detalle</button>
  </Link>
);
