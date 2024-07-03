import { FC } from "react";
import Image from "next/image";

export const Menu: FC = () => {
  return (
    <button className="cursor-pointer h-10 w-10">
      <Image
        src="/images/burger.svg"
        alt="menu button"
        width={18}
        height={12}
      />
    </button>
  );
};
