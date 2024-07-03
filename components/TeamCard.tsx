import { TeamData } from "@/types";
import { FC } from "react";
import Image from "next/image";

interface Props {
  teamMember: TeamData;
}

export const TeamCard: FC<Props> = ({ teamMember }) => {
  return (
    <li>
      <article className="flex items-center gap-2">
        <Image
          src={teamMember.image}
          alt={teamMember.name}
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-1">
          <h3>{teamMember.name}</h3>
          <p className="text-sm text-[#B0B1B6]">{teamMember.position}</p>
        </div>
      </article>
    </li>
  );
};
