"use client"
import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  return (
    <Image
      alt="Logo"
      width="100"
      height="100"
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
    />
  )
}

export default Logo
