"use client"

import React, { useCallback, useEffect, useState } from "react"

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: string
  footer?: string
  actionLabel?: string
  dissabled?: boolean
  secondaryLabel?: string
  secondaryAction: () => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  dissabled,
  secondaryLabel,
  secondaryAction,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleCloseModal = useCallback(() => {
    if (dissabled) {
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [dissabled, onClose])

  const handleSubmit = useCallback(() => {
    if (dissabled) {
      return
    }

    onSubmit()
  }, [dissabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if (dissabled || !secondaryAction) {
      return
    }

    secondaryAction()
  }, [dissabled, secondaryAction])

  if (!isOpen) return null

  return (
    <>
      <div className="text-white flex justify-center overflow-y-auto overflow-x-hidden fixed outline-none focus:outline-none inset-0 z-50 bg-neutral-800/70">
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
              showdow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-one
              focus:outline-one
            "
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
