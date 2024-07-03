import { FC } from "react";
import { GoBackButton } from "./GoBackButton";
import { EmployeeProfile } from "./EmployeeProfile";

export const EmployeeInfo: FC = () => (
  <section className="w-full flex flex-col gap-[8px]">
    <GoBackButton title="вернуться к сотрудникам" />
    <EmployeeProfile />
  </section>
);
