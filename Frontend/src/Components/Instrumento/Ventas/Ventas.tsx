import { FC } from "react";

interface VentasProps{
  ventas:string;
}

export const Ventas: FC<VentasProps> = ({ventas}) => {
  return (
    <>
        <p>{ventas} vendidos</p>
    </>
  )
}
