import { InstrumentoProps } from "../../Types/InstrumentoProps";
import { Boton } from "./Boton/Boton";
import { Entrega } from "./Entrega/Entrega";
import { Imagen } from "./Imagen/Imagen";
import { Precio } from "./Precio/Precio";
import { Title } from "./Title/Title";
import { Ventas } from "./Ventas/Ventas";

export const Instrumento: React.FC<InstrumentoProps> = ({ item }) => (
  <div key={item.id}>
    <Imagen imagen={`/img/${item.imagen}`} />
    <Title title={item.instrumento} />
    <Precio precio={item.precio} />
    <p>Costo de Envio Interior de Argentina: <Entrega entrega={item.costoEnvio}/></p>
    
    <Ventas ventas={item.cantidadVendida} />  
    <Boton id={item.id} />
  </div>
);
