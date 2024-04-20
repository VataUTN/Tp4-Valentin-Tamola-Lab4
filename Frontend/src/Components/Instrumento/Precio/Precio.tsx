import { FC } from "react";

interface PrecioProps{
  precio:string;
}

export const Precio: FC<PrecioProps> = ({precio}) => {
  return (
    <>
        <p>${precio}</p>
    </>
  )
}
