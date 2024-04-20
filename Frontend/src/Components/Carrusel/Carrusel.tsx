import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

export const Carrusel = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/instrumento/masVendidos');
        const data = await response.json();          
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <Carousel>
      {data.map((item, index) => (
        <Carousel.Item key={index}>
          <Image src={`/img/${item.imagen}`} alt={item.instrumento} />
          <Carousel.Caption>
            <h3>{item.instrumento}</h3>
            <p>{item.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;
