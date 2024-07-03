import { FC } from "react";
import Image from "next/image";

export const Profile: FC = () => {
  return (
    <div className="flex items-center px-4 py-[6px] border border-[#363738] rounded-[18px]">
      <Image
        src="/images/employee-avatar.png"
        alt="employee avatar"
        width={24}
        height={24}
      />
      <button>
        <Image
          src="/images/chevron-down.svg"
          alt="chevron down"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};
