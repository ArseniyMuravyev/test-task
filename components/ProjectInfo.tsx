import { FC, useState } from "react";
import { TeamModal } from "./TeamModal";
import { FullWidthButton } from "./FullWidthButton";
import { TeamInfo } from "./TeamInfo";
import { InfoBlock } from "./InfoBlock";
import { DeadlineInfo } from "./DeadlineInfo";

export const ProjectInfo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center gap-4 md:gap-10 mt-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[124px]">
          <InfoBlock label="Название проекта" value="MedPoint 24" />
          <InfoBlock label="Тип проекта" value="Коммерческий" />
        </div>
        <TeamInfo handleOpen={handleOpen} />
        <DeadlineInfo />
        <FullWidthButton title="Посмотреть всю загрузку" />
      </div>
      {isOpen && <TeamModal onClose={handleClose} />}
    </>
  );
};
