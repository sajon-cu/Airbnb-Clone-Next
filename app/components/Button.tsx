"use client"
import React from "react"

interface ButtonProps {
  label: string
  disabled?: boolean
  outline?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  small?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        dissabled:opacity-70
        dissabled:cursor-not-allowed
        transition
        w-full
        rounded-lg
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {label}
    </button>
  )
}

export default Button
