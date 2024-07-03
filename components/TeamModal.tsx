import { FC } from "react";
import { Modal } from "./Modal";
import { TeamList } from "./TeamList";

interface Props {
  onClose: () => void;
}

export const TeamModal: FC<Props> = ({ onClose }) => {
  return (
    <Modal title="Команда" onClose={onClose}>
      <TeamList />
    </Modal>
  );
};
