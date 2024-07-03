import { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
}

export const GoBackButton: FC<Props> = ({ title }) => {
  return (
    <button className="flex gap-[8px] items-center px-4 py-2">
      <Image
        src="/images/chevron-left.svg"
        alt="go back"
        width={24}
        height={24}
      />
      <span className="text-[#76787A] font-semibold leading-5 text-[14px] uppercase">
        {title}
      </span>
    </button>
  );
};
