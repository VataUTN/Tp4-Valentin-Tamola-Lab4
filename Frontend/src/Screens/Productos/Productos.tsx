import { useEffect, useState } from "react";
import { Instrumento } from "../../Components/Instrumento/Instrumento";
import styles from './Productos.module.css';

export const Productos = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/instrumento');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  return (
      <div className={styles.productosContainer}>
        {data.map(item => (
            <div key={item.id} className={styles.instrumentoCard}>
              <Instrumento item={item} />
            </div>
        ))}
      </div>
  );
};
