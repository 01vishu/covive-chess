"use client";

import clsx from "clsx";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  disabled: boolean;
  placeholder: string;
  id: string;
  type?: string;
  required?: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}
const Input: React.FC<InputProps> = ({
  disabled,
  placeholder,
  id,
  type,
  required,
  errors,
  register,
}) => {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      id={id}
      autoComplete={id}
      type={type}
      {...register(id, { required })}
      className={clsx(
        "w-full block rounded-md border-0 bg-gray text-white py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none",
        errors[id] && "focus:ring-rose-500",
        disabled && "opacity-50 cursor-default"
      )}
    />
  );
};

export default Input;
