import { teamData } from "@/data";
import { FC } from "react";
import { TeamCard } from "./TeamCard";

export const TeamList: FC = () => {
  return (
    <ul className="flex flex-col gap-[18px]">
      {teamData.map((teamMember) => (
        <TeamCard teamMember={teamMember} key={teamMember.id} />
      ))}
    </ul>
  );
};
