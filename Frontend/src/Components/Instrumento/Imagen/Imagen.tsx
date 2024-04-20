import { FC } from "react";

interface ImagenProps {
  imagen: string;
}

export const Imagen: FC<ImagenProps> = ({ imagen }) => {
  return (
    <>
      <img src={imagen} alt="Imagen" />
    </>    
  );
};
