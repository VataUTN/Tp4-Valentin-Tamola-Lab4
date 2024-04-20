import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donde-estamos">Donde Estamos</Link></li>
        <li><Link to="/productos">Productos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;