import { FC } from "react";

interface ModeloProps{
    modelo:string;
}

export const Modelo: FC<ModeloProps> = ({modelo}) => {
  return (
    <>
        <p>Modelo: {modelo}</p>
    </>
  )
}
