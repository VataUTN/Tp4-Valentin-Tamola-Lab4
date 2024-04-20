import { FC } from "react";

interface DescripcionProps{
    descripcion:string;
}

export const Descripcion: FC<DescripcionProps> = ({descripcion}) => {
  return (
    <>
        <p>{descripcion}</p>
    </>
  )
}
