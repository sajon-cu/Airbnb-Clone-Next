"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryActionLabel,
  secondaryAction,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  console.log(showModal);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleCloseModal = useCallback(() => {
    // if (disabled) {
    //   return;
    // }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    console.log("Handle Submit");
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed outline-none focus:outline-none inset-0 z-50 bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/* CONTENT */}
          <div
            className={`
              translate 
              duration-300 
              h-full 
              ${showModal ? "translate-y-0" : "translate-y-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shawdow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-none
              focus:outline-none
            "
            >
              {/** HEADER **/}
              <div className="flex items-center p-6 justify-center relative border-b-[1px]">
                <button className="border-0 p-1 absolute left-9 hover:opacity-70">
                  <IoMdClose size={18} onClick={handleCloseModal} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>

              {/** BODY **/}
              <div className="relative p-6">{body}</div>
              {/** FOOTER **/}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row gap-4 items-center">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>

                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
