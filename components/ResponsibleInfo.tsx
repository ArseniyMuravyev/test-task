import { FC } from "react";
import Image from "next/image";

export const ResponsibleInfo: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-[78px]">
      <div className="flex flex-col gap-2">
        <p className="text-[#76787A]">Ответственный</p>
        <div className="flex items-center gap-2">
          <Image
            src="/images/team-member-avatar-1.png"
            alt="curator avatar"
            width={48}
            height={48}
          />
          <p>Анна Кузнецова</p>
        </div>
      </div>
    </div>
  );
};
