import { FC } from "react";

interface EntregaProps {
    entrega: string;
  }

export const Entrega: FC<EntregaProps> = ({entrega}) => {
  let costoEntrega = ''
  
  if (entrega=='G') {
    costoEntrega=`Envio gratis a todo el país`
  }else{
    costoEntrega=`$${entrega}`
  }
  
  return (
    <>
      <p>{costoEntrega}</p>
    </>
  )
}
