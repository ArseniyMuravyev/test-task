"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

interface Props {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ title, onClose, children }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById("modals"));

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-20"
        onClick={onClose}
      />
      <div className="bg-[#232324] z-50 rounded-[12px] p-8 w-full max-w-[824px] max-h-max relative">
        <div className="flex items-center justify-between mb-6 lg:mb-10">
          <h3 className="xl:text-[34px] leading-9 font-normal font-medium text-md">
            {title}
          </h3>
          <button type="button" onClick={onClose}>
            <Image
              src="/images/close.svg"
              alt="close button"
              width={14}
              height={14}
            />
          </button>
        </div>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};
