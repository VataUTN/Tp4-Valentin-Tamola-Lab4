// Importamos el archivo de estilos
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><Link to="/" className={styles.navItem}>Home</Link></li>
                <li><Link to="/donde-estamos" className={styles.navItem}>Donde Estamos</Link></li>
                <li><Link to="/productos" className={styles.navItem}>Productos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
