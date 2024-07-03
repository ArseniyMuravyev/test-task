"use client";

import { FC, useState } from "react";
import { EmployeeForm } from "./EmployeeForm";
import { PersonalInfoModal } from "./PersonalInfoModal";

export const PersonalInfo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <section className="bg-[#232324] mt-4 py-[30px] px-4 md:p-[30px] rounded-[12px] md:w-[55%] w-full max-h-max">
        <div className="flex items-center justify-between mb-8">
          <h2 className="xl:text-2xl font-medium text-md">
            Персональная информация
          </h2>
          <button
            className="text-sm text-medium text-[#76787A]"
            onClick={handleOpen}
          >
            Изменить
          </button>
        </div>
        <EmployeeForm isInModal={false} />
      </section>
      {isOpen && <PersonalInfoModal onClose={handleClose} />}
    </>
  );
};
