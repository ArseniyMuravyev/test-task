import { FC } from "react";
import { teamData } from "@/data";
import Image from "next/image";

interface Props {
  handleOpen: () => void;
}

export const TeamInfo: FC<Props> = ({ handleOpen }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#76787A]">Команда</p>
      <div className="flex -space-x-4 cursor-pointer" onClick={handleOpen}>
        {teamData.map((teamMember, index) => (
          <div key={teamMember.id} className={`z-${index}`}>
            <Image
              src={teamMember.image}
              alt="team member avatar"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
