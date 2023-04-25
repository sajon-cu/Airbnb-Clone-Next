import React from "react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  disabled,
  required,
  formatPrice,
  errors,
  register,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="
            text-neutral-700
            absolute
            left-2
            top-[50%]
            translate-y-[-50%]
          "
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={`Enter Your ${label}`}
        type={type}
        className={`
          peer
          w-full
          p-2 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
    </div>
  );
};

export default Input;
