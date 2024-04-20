import { useEffect, useState } from "react";
import { Instrumento } from "../../Components/Instrumento/Instrumento";

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
    <>
      {data.map(item => (
        <Instrumento key={item.id} item={item} />
      ))}
    </>
  );
};