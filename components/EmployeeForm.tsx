import { FC, useState } from "react";
import { IFormInput } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { inputData } from "@/data";
import { Input } from "./Input";
import { FullWidthButton } from "./FullWidthButton";

interface Props {
  isInModal?: boolean;
}

export const EmployeeForm: FC<Props> = ({ isInModal = false }) => {
  const [formValues, setFormValues] = useState<IFormInput>({
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    dateOfEmployment: "",
    country: "",
    city: "",
    position: "",
    email: "",
  });

  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: formValues,
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setFormValues(data);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-6 w-full"
    >
      {inputData.map((input, index) => (
        <Input
          key={index}
          input={input.input}
          label={input.label}
          placeholder={input.placeholder}
          width={input.width}
          type={input.type}
          register={register}
          disabled={isInModal ? false : true}
          defaultValue={formValues[input.input] || ""}
        />
      ))}
      {isInModal && <FullWidthButton title="сохранить" classNames="mt-4" />}
    </form>
  );
};
