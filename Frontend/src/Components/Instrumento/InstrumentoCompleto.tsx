import { InstrumentoProps } from "../../Types/InstrumentoProps";
import { Descripcion } from "./Descripcion/Descripcion";
import { Entrega } from "./Entrega/Entrega";
import { Imagen } from "./Imagen/Imagen";
import { Marca } from "./Marca/Marca";
import { Modelo } from "./Modelo/Modelo";
import { Precio } from "./Precio/Precio";
import { Title } from "./Title/Title";
import { Ventas } from "./Ventas/Ventas";

export const InstrumentoCompleto: React.FC<InstrumentoProps> = ({item}) => {
  return (
    <div key={item.id}>
        <Imagen imagen={`/img/${item.imagen}`} />
        <Ventas ventas={item.cantidadVendida} />  
        <Title title={item.instrumento} />
        <Precio precio={item.precio} />
        <Marca marca={item.marca}/>
        <Modelo modelo={item.modelo}/>
        <p>Costo Envio:</p>
        <Entrega entrega={item.costoEnvio}/>
        <p>Descripcion:</p>
        <Descripcion descripcion={item.descripcion}/>
  </div>
  )
}
