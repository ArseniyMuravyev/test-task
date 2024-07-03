import { FC } from "react";
import Image from "next/image";

export const DeadlineInfo: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#76787A]">Сроки работы</p>
      <div className="flex gap-2 items-center">
        <span className="text-[#B0B1B6]">03 марта 2023</span>
        <Image
          src="/images/arrow-right.svg"
          alt="arrow right"
          width={24}
          height={24}
        />
        <span className="text-[#B0B1B6]">23 марта 2023</span>
      </div>
    </div>
  );
};
