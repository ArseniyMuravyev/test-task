import { FC } from "react";
import { ProjectInfo } from "./ProjectInfo";

export const EmployeeWorkload: FC = () => {
  return (
    <section className="bg-[#232324] mt-4 py-[30px] px-4 md:p-[30px] rounded-[12px] md:w-[45%] max-h-max w-full">
      <div className="flex items-center justify-between">
        <h2 className="lg:text-2xl font-medium text-md">Загрузка сотрудника</h2>
        <span className="text-sm text-[#D77556] font-semibold">100 %</span>
      </div>
      <ProjectInfo />
    </section>
  );
};
