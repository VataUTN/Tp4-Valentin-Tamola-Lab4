import { FC } from "react";

interface MarcaProps{
    marca:string;
}

export const Marca: FC<MarcaProps> = ({marca}) => {
  return (
    <>
        <p>Marca: {marca}</p>
    </>
  )
}
