import { FC } from "react";
import { Modal } from "./Modal";
import { EmployeeForm } from "./EmployeeForm";

interface Props {
  onClose: () => void;
}

export const PersonalInfoModal: FC<Props> = ({ onClose }) => {
  return (
    <Modal title="Персональная информация" onClose={onClose}>
      <EmployeeForm isInModal />
    </Modal>
  );
};
