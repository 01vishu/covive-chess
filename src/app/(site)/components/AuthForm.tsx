"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
type VARIENT = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [varient, setVarient] = useState<VARIENT>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();
  const toggleVarient = useCallback(() => {
    if (varient === "LOGIN") setVarient("REGISTER");
    else setVarient("LOGIN");
  }, [varient]);
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/play");
    }
  }, [session?.status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (varient === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Somthing went worng!"))
        .finally(() => setIsLoading(false));
    }
    if (varient === "LOGIN") {
      // NextAuth SignIn
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Logged In!");
            router.push("/play");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };
  return (
    <div className="w-full ">
      <form
        className="flex flex-col py-8 px-4 space-y-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        {varient === "REGISTER" && (
          <Input
            id="username"
            placeholder="Username"
            disabled={isLoading}
            errors={errors}
            register={register}
          />
        )}
        <Input
          id="email"
          type="email"
          placeholder="Email"
          disabled={isLoading}
          errors={errors}
          register={register}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          disabled={isLoading}
          errors={errors}
          register={register}
        />
        <Button
          type="submit"
          widthFull={true}
          name={varient === "LOGIN" ? "Sign In" : "Register"}
          disabled={isLoading}
        />
      </form>
      <div className="">
        <div className="relative">
          <div
            className="
            absolute
            inset-0
            flex
            items-center
            "
          >
            <div className="w-full border-t border-gray" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-secondary px-2 text-white">
              Or continue with
            </span>
          </div>
        </div>
        <div className="my-6 mx-4 flex gap-2">
          <AuthSocialButton icon={BsGithub} onClick={() => {}} />
          <AuthSocialButton icon={BsGoogle} onClick={() => {}} />
        </div>
        <div
          className="
        flex
        gap-2
        justify-center
        text-sm
        my-4
        px-2
        text-gray-500       
        "
        >
          <div>
            {varient === "LOGIN"
              ? "New to Covive Chess?"
              : "Already have an account?"}
          </div>
          <div className="underline cursor-pointer" onClick={toggleVarient}>
            {varient === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
