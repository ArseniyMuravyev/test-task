"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { EmployeeName } from "./EmployeeName";
import { EmployeeLabels } from "./EmployeeLabels";
import { TabHeaders } from "./TabHeaders";
import { TabContent } from "./TabContent";

export const EmployeeProfile: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="flex w-full bg-[#232324] rounded-[12px] md:p-10 md:pb-5 py-8 px-4 flex-col gap-[8px]">
        <div>
          <div className="flex md:flex-row flex-col md:gap-12 items-center gap-4">
            <Image
              src="/images/employee-avatar.png"
              alt="employee avatar"
              width={160}
              height={160}
            />
            <EmployeeName name="Иванов Иван Иванович" />
          </div>
          <EmployeeLabels
            position="UI/UX designer"
            location="Россия, Красноярск"
          />
          <TabHeaders activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
      </div>
      <TabContent activeTab={activeTab} />
    </>
  );
};
