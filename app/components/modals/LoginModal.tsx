"use client";

import { signIn } from "next-auth/react";
import React, { useCallback, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Button from "../Button";
import Input from "../Input";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.ok) {
        setIsLoading(false);
        toast.success("Login successfull");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3 relative">
      <hr />

      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {
          /*signIn('google')*/
        }}
      />

      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {
          /*signIn('google')*/
        }}
      />

      <div className="flex flex-row justify-center items-center gap-2">
        <div>Already have an account?</div>
        <div className="text-neutral-800 cursor-pointer hover:underline">
          Log in
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      onClose={loginModal.onClose}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default LoginModal;
