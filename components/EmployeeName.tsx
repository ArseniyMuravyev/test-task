import { FC } from "react";

interface Props {
  name: string;
}

export const EmployeeName: FC<Props> = ({ name }) => (
  <h1 className="font-bold text-2xl md:text-5xl md:max-w-[398px] text-center md:text-left md:leading-[56px]">
    {name}
  </h1>
);
