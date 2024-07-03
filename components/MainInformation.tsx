import { FC } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { EmployeeWorkload } from "./EmployeeWorkload";

export const MainInformation: FC = () => {
  return (
    <div className="flex gap-4 w-full md:flex-row flex-col">
      <PersonalInfo />
      <EmployeeWorkload />
    </div>
  );
};
