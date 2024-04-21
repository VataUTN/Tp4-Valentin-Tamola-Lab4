// Importamos el archivo de estilos
import styles from './home.module.css';
import { Carrusel } from "../../Components/Carrusel/Carrusel"

export const Home = () => {
    return (
        <>
        <div className={styles.homeContainer}>
            <h1 className={styles.title}>Musical Hendrix</h1>
            <Carrusel/>
            <p className={styles.paragraph}>
                Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de
                experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las
                mejores elecciones para tu compra musical.
            </p>
        </div>
            </>
    );
};
