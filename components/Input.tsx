import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { IFormInput } from "@/types";

interface Props {
  input: keyof IFormInput;
  label: string;
  width: "full" | "half";
  placeholder: string;
  type?: string;
  disabled: boolean;
  register: UseFormRegister<IFormInput>;
  defaultValue: string;
}

export const Input: FC<Props> = ({
  input,
  label,
  width,
  placeholder,
  type = "text",
  disabled,
  register,
  defaultValue,
}) => {
  return (
    <div
      className={`flex flex-col ${width === "full" ? "w-full" : "lg:w-1/2 xl:w-[calc(50%-14px)]"} w-full relative`}
    >
      <label className="text-[#B0B1B6] text-xs absolute z-10 top-[-8px] left-2">
        {label}
      </label>
      <input
        {...register(input)}
        className="px-[14px] py-2 rounded-[4px] border border-[#363738] bg-transparent text-[#B0B1B6] font-medium text-sm"
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </div>
  );
};
