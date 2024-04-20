import { FC } from "react";

interface TitleProps{
  title:string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  return (
    <>
      <h3>{title}</h3>
    </>
  )
}
