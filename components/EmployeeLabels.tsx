import { FC } from "react";

interface Props {
  position: string;
  location: string;
}

export const EmployeeLabels: FC<Props> = ({ position, location }) => {
  return (
    <div className="flex flex-col gap-4 leading-6 items-center md:max-w-[606px] mt-6 md:mt-0">
      <p>{position}</p>
      <p>{location}</p>
    </div>
  );
};
