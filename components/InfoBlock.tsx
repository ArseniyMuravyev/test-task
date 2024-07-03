import { FC } from "react";

interface InfoBlockProps {
  label: string;
  value: string;
}

export const InfoBlock: FC<InfoBlockProps> = ({ label, value }) => (
  <div className="flex flex-col gap-2">
    <p className="text-[#76787A]">{label}</p>
    <p>{value}</p>
  </div>
);
