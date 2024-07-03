import { FC } from "react";

interface Props {
  title: string;
  classNames?: string;
}

export const FullWidthButton: FC<Props> = ({ classNames, title }) => {
  return (
    <button className={`bg-[#0047BB] w-full px-4 py-[10px] ${classNames}`}>
      <span className="uppercase text-sm font-semibold">{title}</span>
    </button>
  );
};
